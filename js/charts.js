/**
 * 羌藏耕牧智护 - Chart.js 图表初始化
 * 包含各页面的图表渲染函数
 */

// Chart.js 全局配置
Chart.defaults.font.family = "'Noto Sans SC', -apple-system, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#6B7280';
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.padding = 16;

// 主题色
const COLORS = {
  primary: '#1A6B42',
  primaryLight: '#E8F5EE',
  red: '#E74C3C',
  orange: '#F39C12',
  yellow: '#F1C40F',
  green: '#27AE60',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  gray: '#9CA3AF',
  text: '#1A1A2E',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  background: '#F5F7FA'
};

// ========== G1: NDVI 趋势折线图 ==========
function initNDVIChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.ndviTrend;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'NDVI 植被指数',
        data: data.values,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primaryLight,
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        annotation: {},
        legend: { display: false }
      },
      scales: {
        y: {
          min: 0.3, max: 0.9,
          grid: { color: COLORS.border }
        },
        x: {
          grid: { display: false }
        }
      }
    },
    plugins: [{
      // 预警阈值线（红色虚线 y=0.45）
      id: 'thresholdLine',
      beforeDraw(chart) {
        const { ctx, chartArea: { left, right }, scales: { y } } = chart;
        const yPos = y.getPixelForValue(0.45);
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = COLORS.red;
        ctx.lineWidth = 1.5;
        ctx.moveTo(left, yPos);
        ctx.lineTo(right, yPos);
        ctx.stroke();
        // 标签
        ctx.fillStyle = COLORS.red;
        ctx.font = '11px Noto Sans SC';
        ctx.textAlign = 'right';
        ctx.fillText('预警阈值 0.45', right - 5, yPos - 6);
        ctx.restore();
      }
    }]
  });
}

// ========== G3: 牲畜数量趋势（混合图）==========
function initLivestockChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.livestockTrend;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.months,
      datasets: [
        {
          label: '牦牛（万头）',
          data: data.yak,
          backgroundColor: COLORS.primary + 'CC',
          borderColor: COLORS.primary,
          borderWidth: 1,
          yAxisID: 'y',
          order: 2
        },
        {
          label: '藏绵羊（万只）',
          data: data.sheep,
          backgroundColor: COLORS.orange + 'CC',
          borderColor: COLORS.orange,
          borderWidth: 1,
          yAxisID: 'y',
          order: 2
        },
        {
          label: '牦牛同比增长率（%）',
          data: data.yak.map((v, i) => i === 0 ? null : ((v - data.yak[i - 1]) / data.yak[i - 1] * 100).toFixed(1)),
          type: 'line',
          borderColor: COLORS.red,
          backgroundColor: 'transparent',
          pointRadius: 3,
          yAxisID: 'y1',
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: {
          position: 'left',
          title: { display: true, text: '数量（万头/只）' },
          grid: { color: COLORS.border }
        },
        y1: {
          position: 'right',
          title: { display: true, text: '同比增长率（%）' },
          grid: { display: false },
          ticks: { callback: v => v + '%' }
        },
        x: { grid: { display: false } }
      }
    }
  });
}

// ========== G3: 特色产业产量柱状图 ==========
function initCropChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.cropProduction;

  const colors = [COLORS.primary, COLORS.red, COLORS.orange, COLORS.blue, COLORS.purple];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [{
        label: '产量（万吨）',
        data: data.values,
        backgroundColor: colors.map(c => c + 'CC'),
        borderColor: colors,
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.raw} 万吨`
          }
        }
      },
      scales: {
        x: { grid: { color: COLORS.border } },
        y: { grid: { display: false } }
      }
    }
  });
}

// ========== G3: 土地利用环形图 ==========
function initLandUseChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.landUse;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: [COLORS.primary, '#134E30', COLORS.orange, COLORS.gray],
        borderWidth: 2,
        borderColor: '#FFFFFF'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: ctx => {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((ctx.raw / total) * 100).toFixed(1);
              return `${ctx.label}: ${ctx.raw}万亩 (${pct}%)`;
            }
          }
        }
      }
    },
    plugins: [{
      // 中心文字
      id: 'centerText',
      beforeDraw(chart) {
        const { ctx, chartArea: { left, right, top, bottom } } = chart;
        const cx = (left + right) / 2;
        const cy = (top + bottom) / 2;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.fillStyle = COLORS.text;
        ctx.font = 'bold 14px Noto Sans SC';
        ctx.fillText('阿坝州', cx, cy - 8);
        ctx.font = '12px Noto Sans SC';
        ctx.fillStyle = COLORS.textSecondary;
        ctx.fillText('8.39万km²', cx, cy + 12);
        ctx.restore();
      }
    }]
  });
}

// ========== G3: 预警趋势面积图 ==========
function initAlertTrendChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.alertTrend;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.months,
      datasets: [
        { label: '疾病风险', data: data.disease, borderColor: COLORS.red, backgroundColor: COLORS.red + '20', fill: true, tension: 0.4 },
        { label: '设备故障', data: data.device, borderColor: COLORS.gray, backgroundColor: COLORS.gray + '20', fill: true, tension: 0.4 },
        { label: '生态异常', data: data.ecology, borderColor: COLORS.orange, backgroundColor: COLORS.orange + '20', fill: true, tension: 0.4 },
        { label: '气象灾害', data: data.weather, borderColor: COLORS.blue, backgroundColor: COLORS.blue + '20', fill: true, tension: 0.4 },
        { label: '违规行为', data: data.violation, borderColor: COLORS.yellow, backgroundColor: COLORS.yellow + '20', fill: true, tension: 0.4 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: { stacked: true, grid: { color: COLORS.border } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ========== G3: 农牧业收入排名 ==========
function initIncomeChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.incomeRanking;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.county),
      datasets: [{
        label: '平均农牧业收入（元）',
        data: data.map(d => d.income),
        backgroundColor: COLORS.primary + 'CC',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel: (ctx) => {
              const item = data[ctx.dataIndex];
              return `同比: ${item.change > 0 ? '↑' : '↓'}${Math.abs(item.change)}%`;
            }
          }
        }
      },
      scales: {
        x: { grid: { color: COLORS.border }, ticks: { callback: v => v >= 10000 ? (v / 10000).toFixed(1) + '万' : v } },
        y: { grid: { display: false } }
      }
    }
  });
}

// ========== F1: 健康指数迷你图 ==========
function initHealthMiniChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.healthIndex;
  const labels = ['周一','周二','周三','周四','周五','周六','周日'];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primaryLight,
        fill: true,
        tension: 0.4,
        pointRadius: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { display: false, min: 85, max: 100 },
        x: { display: false }
      }
    }
  });
}

// ========== F1: 环境指标迷你图 ==========
function initEnvMiniChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.envIndicators;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [
        { label: '温度°C', data: data.temp, backgroundColor: COLORS.orange + 'CC', borderRadius: 3, barPercentage: 0.6 },
        { label: '湿度%', data: data.humidity, backgroundColor: COLORS.blue + 'CC', borderRadius: 3, barPercentage: 0.6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { display: false },
        x: { display: false }
      }
    }
  });
}

// ========== F4: 营销数据图表 ==========
function initMarketingChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.marketingTrend;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        { label: '发布量', data: data.publish, borderColor: COLORS.primary, tension: 0.4, yAxisID: 'y' },
        { label: '互动量', data: data.interaction, borderColor: COLORS.orange, tension: 0.4, yAxisID: 'y1' },
        { label: '粉丝数', data: data.followers, borderColor: COLORS.purple, tension: 0.4, yAxisID: 'y1', borderDash: [5, 5] }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: { position: 'left', grid: { color: COLORS.border } },
        y1: { position: 'right', grid: { display: false } },
        x: { grid: { display: false } }
      }
    }
  });
}

// ========== F5: 扫码分布图 ==========
function initScanDistChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.scanDistribution;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.region),
      datasets: [{
        label: '扫码次数',
        data: data.map(d => d.count),
        backgroundColor: COLORS.primary + 'CC',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: COLORS.border } },
        y: { grid: { display: false } }
      }
    }
  });
}

// ========== F5: 扫码趋势图 ==========
function initScanTrendChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  const data = window.MockData.chartData.scanTrend;
  const labels = data.map((_, i) => `${i + 1}日`);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: '扫码次数',
        data,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primaryLight,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: COLORS.border } },
        x: {
          grid: { display: false },
          ticks: { maxTicksLimit: 10 }
        }
      }
    }
  });
}
