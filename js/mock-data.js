/**
 * 羌藏耕牧智护 - Mock 数据
 * 所有前端页面共用的模拟数据
 * 数据基于阿坝州2025年统计公报及真实产业数据
 */

window.MockData = {

  // ========== 阿坝州13县/市 ==========
  counties: [
    { id: 1, name: '汶川县', nameBo: 'ཝན་ཁྲུང་རྫོང', feature: '甜樱桃、猕猴桃', status: 'normal' },
    { id: 2, name: '理县', nameBo: 'ལི་རྫོང', feature: '蔬菜、核桃', status: 'normal' },
    { id: 3, name: '茂县', nameBo: 'མ་རྫོང', feature: '茂县李子、甜樱桃、苹果', status: 'warning' },
    { id: 4, name: '松潘县', nameBo: 'བསམ་ཕྱོགས་རྫོང', feature: '松潘牦牛、川贝母', status: 'normal' },
    { id: 5, name: '九寨沟县', nameBo: 'རྒྱ་འཇགས་རྫོང', feature: '核桃、花椒', status: 'normal' },
    { id: 6, name: '金川县', nameBo: 'ཁྲེང་ཆུ་རྫོང', feature: '金川雪梨、花椒', status: 'attention' },
    { id: 7, name: '小金县', nameBo: 'ཤུལ་ཅན་རྫོང', feature: '小金苹果、高山蔬菜', status: 'warning' },
    { id: 8, name: '马尔康市', nameBo: 'བརྟན་དབྱངས་གྲོང་ཁྱེར', feature: '牦牛、中药材', status: 'normal' },
    { id: 9, name: '阿坝县', nameBo: 'ར་པ་རྫོང', feature: '牦牛、藏绵羊', status: 'normal' },
    { id: 10, name: '若尔盖县', nameBo: 'རོང་རྩེ་རྫོང', feature: '牦牛、藏绵羊', status: 'warning' },
    { id: 11, name: '红原县', nameBo: 'རྡུང་ཡུལ་རྫོང', feature: '麦洼牦牛、牦牛奶', status: 'attention' },
    { id: 12, name: '壤塘县', nameBo: 'རང་ཐང་རྫོང', feature: '牦牛、中药材', status: 'normal' },
    { id: 13, name: '黑水县', nameBo: 'ཆུ་ནག་རྫོང', feature: '中蜂蜜、核桃', status: 'normal' }
  ],

  // ========== 设备数据 ==========
  devices: {
    total: 1380,
    online: 1247,
    offline: 133,
    byType: {
      satellite: { total: 3, online: 3, name: '卫星遥感接收站', icon: 'satellite', color: '#3B82F6' },
      drone: { total: 8, online: 7, name: '多光谱无人机', icon: 'plane', color: '#27AE60' },
      sensor: { total: 920, online: 845, name: '土壤/气象传感器', icon: 'thermometer', color: '#F39C12' },
      camera: { total: 380, online: 342, name: '智能摄像头', icon: 'camera', color: '#F39C12' },
      router: { total: 69, online: 50, name: '4G工业路由器', icon: 'wifi', color: '#F39C12' }
    },
    offlineList: [
      { id: 'SEN-MX-003', name: '茂县南新镇3号土壤传感器', type: 'sensor', county: '茂县', offlineSince: '2026-05-17 03:12:00', duration: '6小时' },
      { id: 'CAM-REG-002', name: '若尔盖县2号牧场摄像头', type: 'camera', county: '若尔盖县', offlineSince: '2026-05-17 07:30:00', duration: '2小时' },
      { id: 'SEN-HY-005', name: '红原县5号温湿度传感器', type: 'sensor', county: '红原县', offlineSince: '2026-05-17 05:45:00', duration: '4小时' },
      { id: 'CAM-SPT-001', name: '松潘县1号牧场摄像头', type: 'camera', county: '松潘县', offlineSince: '2026-05-17 08:00:00', duration: '1.5小时' },
      { id: 'SEN-XJ-002', name: '小金县2号土壤养分传感器', type: 'sensor', county: '小金县', offlineSince: '2026-05-16 22:00:00', duration: '11.5小时' },
      { id: 'SEN-JC-001', name: '金川县1号土壤水分传感器', type: 'sensor', county: '金川县', offlineSince: '2026-05-17 01:20:00', duration: '8小时' },
      { id: 'CAM-WS-003', name: '汶川县3号果园摄像头', type: 'camera', county: '汶川县', offlineSince: '2026-05-16 18:00:00', duration: '15.5小时' },
      { id: 'SEN-HS-002', name: '黑水县2号土壤pH传感器', type: 'sensor', county: '黑水县', offlineSince: '2026-05-17 06:00:00', duration: '3.5小时' },
      { id: 'RT-MX-001', name: '茂县南新镇4G路由器#01', type: 'router', county: '茂县', offlineSince: '2026-05-17 04:30:00', duration: '5小时' },
      { id: 'SEN-AB-003', name: '阿坝县3号草场传感器', type: 'sensor', county: '阿坝县', offlineSince: '2026-05-17 02:00:00', duration: '7.5小时' }
    ]
  },

  // ========== 预警数据（20+条，含所有类型）==========
  alerts: [
    // 设备故障（5条）
    { id: 1, level: 'orange', type: 'device', typeName: '设备故障', title: '茂县南新镇3号土壤传感器通信中断', content: '该传感器已离线超过6小时，最后上传数据时间2026-05-17 03:12:00。初步判断为4G路由器信号中断，设备本身支持离线存储7天，数据暂未丢失。', county: '茂县', location: '南新镇', time: '2026-05-17 09:23:00', status: 'pending', deviceInfo: { deviceId: 'SEN-MX-003', deviceType: '土壤传感器', lastOnline: '2026-05-17 03:12:00', probableCause: '4G信号中断', suggestedAction: '检查4G路由器信号，必要时派遣人员现场检修' }, aiSuggestion: ['检查该区域4G工业路由器运行状态', '确认传感器离线存储功能正常（支持7天）', '通知茂县维护人员前往现场检查'] },
    { id: 2, level: 'red', type: 'device', typeName: '设备故障', title: '若尔盖县2号牧场摄像头画面异常', content: '画面疑似镜头结露导致模糊，影响实时监控质量。该摄像头负责草场违规放牧监控，建议尽快处理。', county: '若尔盖县', location: '唐克镇', time: '2026-05-17 08:15:00', status: 'pending', deviceInfo: { deviceId: 'CAM-REG-002', deviceType: '智能摄像头', lastOnline: '2026-05-17 07:30:00', probableCause: '镜头结露/污损', suggestedAction: '远程重启加热除雾功能，无效则派员擦拭' }, aiSuggestion: ['远程触发摄像头除雾加热功能', '若5分钟后画面未恢复，派遣维护人员', '临时启用备用摄像头覆盖该区域'] },
    { id: 3, level: 'orange', type: 'device', typeName: '设备故障', title: '红原县无人机#02电池电量异常', content: '飞行中电池放电速率异常，续航从原45分钟缩短至18分钟。已自动返航降落，建议更换电池。', county: '红原县', location: '邛溪镇', time: '2026-05-17 07:50:00', status: 'processing', deviceInfo: { deviceId: 'DRN-HY-002', deviceType: '多光谱无人机', lastOnline: '2026-05-17 07:50:00', probableCause: '电池老化/单体损坏', suggestedAction: '更换备用电池，送修检测' }, aiSuggestion: ['将故障电池标记并送检', '更换备用电池后进行短程试飞', '检查同批次电池使用状态'] },
    { id: 4, level: 'yellow', type: 'device', typeName: '设备故障', title: '汶川县1号北斗信号放大器信号强度低于阈值', content: '信号强度从-85dBm降至-110dBm，部分牦牛定位数据延迟超过30秒。可能原因：天线松动或遮挡。', county: '汶川县', location: '三江镇', time: '2026-05-17 06:30:00', status: 'processing', deviceInfo: { deviceId: 'RT-WS-001', deviceType: '北斗信号放大器', lastOnline: '2026-05-17 06:30:00', probableCause: '天线松动/植被遮挡', suggestedAction: '检查天线固定状态，清除遮挡物' }, aiSuggestion: ['远程检查设备运行日志', '通知当地维护人员检查天线', '临时切换至备用信号源'] },
    { id: 5, level: 'orange', type: 'device', typeName: '设备故障', title: '小金县2号土壤养分传感器数据异常跳变', content: '传感器连续输出超出合理范围的氮磷钾数据（氮含量突然从45mg/kg跳至380mg/kg），疑似传感器探头老化或损坏。', county: '小金县', location: '美兴镇', time: '2026-05-17 05:10:00', status: 'pending', deviceInfo: { deviceId: 'SEN-XJ-002', deviceType: '土壤养分传感器', lastOnline: '2026-05-16 22:00:00', probableCause: '传感器探头老化/损坏', suggestedAction: '校准传感器，无效则更换探头' }, aiSuggestion: ['远程尝试重新校准传感器', '对比同区域其他传感器数据验证', '安排更换传感器探头'] },
    // 疾病风险（4条）
    { id: 6, level: 'red', type: 'disease', typeName: '疾病风险', title: '红原县邛溪镇牦牛群体体温异常', content: '扎西家庭牧场3头麦洼牦牛体温持续高于40.5°C，结合近期天气变化（降温8°C）和流行病学分析，疑似口蹄疫前期症状，建议立即隔离观察并进行实验室检测。', county: '红原县', location: '邛溪镇扎西家庭牧场', time: '2026-05-17 08:45:00', status: 'pending', aiSuggestion: ['立即对3头异常个体进行物理隔离', '联系红原县畜牧站进行现场采样检测', '对周边3公里范围内牧场发出预警通知', '检查近期饲料和饮水是否存在异常'] },
    { id: 7, level: 'orange', type: 'disease', typeName: '疾病风险', title: '若尔盖县唐克镇藏绵羊寄生虫感染预警', content: '巡检发现多处牧场藏绵羊出现被毛粗乱、消瘦症状，结合4-6月寄生虫高发期特征，初步判断为肝片吸虫感染。', county: '若尔盖县', location: '唐克镇', time: '2026-05-17 07:20:00', status: 'pending', aiSuggestion: ['建议使用吡喹酮进行驱虫治疗', '对牧场水源进行检测，排除螺类中间宿主', '加强圈舍清洁消毒'] },
    { id: 8, level: 'yellow', type: 'disease', typeName: '疾病风险', title: '茂县凤仪镇甜樱桃叶片异常', content: 'AI视觉识别发现部分甜樱桃叶片出现穿孔和褐色斑点，疑似褐斑病早期症状。当前湿度较高（78%），有利于病害传播。', county: '茂县', location: '凤仪镇', time: '2026-05-17 06:50:00', status: 'processing', aiSuggestion: ['使用代森锰锌或百菌清进行预防性喷施', '降低果园湿度，加强通风', '清除病叶减少传染源'] },
    { id: 9, level: 'yellow', type: 'disease', typeName: '疾病风险', title: '小金县苹果园蚜虫活动增加', content: '无人机巡检图像显示美兴镇苹果园蚜虫密度较上周增加35%，部分新梢出现卷叶现象。', county: '小金县', location: '美兴镇', time: '2026-05-16 16:30:00', status: 'resolved', aiSuggestion: ['释放瓢虫等天敌进行生物防治', '使用吡虫啉进行化学防治', '重点保护新梢和花芽'] },
    // 生态异常（4条）
    { id: 10, level: 'red', type: 'ecology', typeName: '生态异常', title: '若尔盖县唐克镇草场NDVI指数持续下降', content: '该区域草场NDVI指数从上月0.58降至当前0.42，低于预警阈值0.45，下降幅度达27.6%。结合遥感影像分析，可能原因：过度放牧叠加春季干旱。', county: '若尔盖县', location: '唐克镇', time: '2026-05-17 08:00:00', status: 'pending', aiSuggestion: ['立即启动草畜平衡应急调控', '建议减少该区域放牧载畜量30%', '人工补播优良牧草恢复草场', '启动无人机定期监测（每周1次）'] },
    { id: 11, level: 'orange', type: 'ecology', typeName: '生态异常', title: '红原县邛溪镇草场退化面积扩大', content: '卫星遥感对比分析显示，退化草场面积较去年同期扩大约12%，主要表现为植被盖度下降、毒杂草比例增加。', county: '红原县', location: '邛溪镇', time: '2026-05-16 14:20:00', status: 'pending', aiSuggestion: ['制定分区轮牧计划减轻草场压力', '对退化严重区域进行围栏封育', '补播垂穗披碱草等优良牧草'] },
    { id: 12, level: 'yellow', type: 'ecology', typeName: '生态异常', title: '松潘县小河沟流域水土流失风险', content: '近期降雨量偏大，结合地形坡度分析，小河沟流域部分坡耕地存在中度水土流失风险。', county: '松潘县', location: '小河乡', time: '2026-05-17 07:00:00', status: 'pending', aiSuggestion: ['加强坡耕地等高耕作管理', '检查梯田田埂完好性', '必要时修筑截水沟'] },
    { id: 13, level: 'yellow', type: 'ecology', typeName: '生态异常', title: '黑水县知木林乡森林火险等级升高', content: '气温持续偏高，空气湿度降至35%，结合植被干燥度指数分析，森林火险等级升至黄色。', county: '黑水县', location: '知木林乡', time: '2026-05-16 10:00:00', status: 'resolved', aiSuggestion: ['加强巡护频次，确保监测无死角', '清理林下可燃物', '做好防火宣传和应急准备'] },
    // 气象灾害（4条）
    { id: 14, level: 'orange', type: 'weather', typeName: '气象灾害', title: '松潘县未来24小时预计暴雪', content: '气象台预报松潘县未来24小时预计降雪15-20mm，高海拔地区可达25mm。牦牛需转移至冬季牧场或圈舍，注意防寒保暖。', county: '松潘县', location: '全县', time: '2026-05-17 06:00:00', status: 'pending', aiSuggestion: ['立即通知高海拔牧场做好防寒准备', '牦牛转移至冬季牧场或加固圈舍', '储备足够的补饲饲料', '检查圈舍屋顶和围墙安全'] },
    { id: 15, level: 'red', type: 'weather', typeName: '气象灾害', title: '若尔盖县冰雹预警', content: '强对流天气预警：若尔盖县唐克镇、辖曼镇等区域未来6小时内可能出现直径10-20mm冰雹，对露天农作物和牲畜构成威胁。', county: '若尔盖县', location: '唐克镇、辖曼镇', time: '2026-05-17 11:30:00', status: 'pending', aiSuggestion: ['立即通知相关区域农牧民做好防范', '牲畜赶入圈舍躲避', '露天果树幼苗覆盖防护网', '灾后及时评估损失并上报'] },
    { id: 16, level: 'yellow', type: 'weather', typeName: '气象灾害', title: '小金县持续干旱预警', content: '近30天降水量较常年偏少45%，土壤含水量降至临界值以下，苹果园和蔬菜基地灌溉压力增大。', county: '小金县', location: '全县', time: '2026-05-15 09:00:00', status: 'processing', aiSuggestion: ['启动应急灌溉方案', '推广滴灌节水技术', '覆盖地膜减少土壤水分蒸发', '关注天气变化适时人工增雨'] },
    { id: 17, level: 'yellow', type: 'weather', typeName: '气象灾害', title: '金川县霜冻预警', content: '未来48小时内最低气温可能降至-2°C，正值金川雪梨花期，霜冻可能造成严重减产。', county: '金川县', location: '勒乌镇', time: '2026-05-16 18:00:00', status: 'resolved', aiSuggestion: ['果园熏烟防霜冻', '树冠喷洒防冻液', '做好灾后补救准备'] },
    // 违规行为（3条）
    { id: 18, level: 'red', type: 'violation', typeName: '违规行为', title: '黑水县知木林乡超载放牧', content: '无人机巡检发现超载放牧区域，实际载畜量超出核定标准的32%，草场出现明显退化迹象。涉及牧户：3户。', county: '黑水县', location: '知木林乡', time: '2026-05-17 10:00:00', status: 'pending', aiSuggestion: ['立即约谈相关牧户', '限期7日内将超载牲畜转移', '对草场退化区域进行围栏休牧', '协助牧户对接冬季补饲资源'] },
    { id: 19, level: 'orange', type: 'violation', typeName: '违规行为', title: '松潘县无人机巡检发现违规放牧区域', content: '在禁止放牧的生态修复区内发现放牧行为，涉及面积约15亩，疑似外来转场牧群。', county: '松潘县', location: '川主寺镇', time: '2026-05-17 09:00:00', status: 'processing', aiSuggestion: ['核实放牧人员身份和牲畜来源', '立即驱离并设立警示标志', '加强该区域日常巡护'] },
    { id: 20, level: 'yellow', type: 'violation', typeName: '违规行为', title: '若尔盖县湿地保护区内疑似偷牧', content: '卫星遥感检测到湿地保护区内新增牲畜活动痕迹，初步判断为夜间偷牧行为，面积约8亩。', county: '若尔盖县', location: '辖曼镇', time: '2026-05-16 22:00:00', status: 'pending', aiSuggestion: ['部署红外摄像头进行夜间监控', '通知湿地保护区管理人员加强巡查', '依法处理违规放牧行为'] }
  ],

  // ========== 农户数据（15户）==========
  farmers: [
    { id: 1, name: '扎西', ethnicity: '藏', phone: '138****5678', county: '红原县', town: '邛溪镇', type: 'breeding', typeName: '牦牛养殖', mainProduct: '麦洼牦牛', livestock: { yak: 156, sheep: 45, horse: 3 }, area: { farmland: 0, grassland: 2400 }, status: 'normal', monthlyIncome: 12800, incomeTrend: [8500, 9200, 10100, 10800, 11500, 12800], trainingRecords: [
      { date: '2026-05-10', type: '线下培训', topic: '牦牛口蹄疫防控与春季防疫', duration: '3小时', status: 'completed', score: 4.8 },
      { date: '2026-04-22', type: '线上培训', topic: 'AI种养助手操作指南', duration: '1.5小时', status: 'completed', score: 4.5 },
      { date: '2026-04-05', type: '线下培训', topic: '高原牦牛科学放牧与草场管理', duration: '3小时', status: 'completed', score: 4.7 },
      { date: '2026-03-15', type: '线上培训', topic: '云认养运营与客户互动技巧', duration: '2小时', status: 'completed', score: 4.2 },
      { date: '2026-05-25', type: '线下培训', topic: '牦牛电子耳标使用与数据管理', duration: '2小时', status: 'upcoming', score: null }
    ] },
    { id: 2, name: '杨小梅', ethnicity: '汉', phone: '159****3456', county: '小金县', town: '美兴镇', type: 'planting', typeName: '果树种植', mainProduct: '小金苹果（金冠系列）', livestock: {}, area: { farmland: 85, grassland: 0 }, status: 'normal', monthlyIncome: 9600, incomeTrend: [3200, 4800, 5600, 7200, 8500, 9600], trainingRecords: [
      { date: '2026-04-05', type: '线下培训', topic: '小金苹果夏季修剪与病虫害管理', duration: '4小时', status: 'completed', score: 4.9 },
      { date: '2026-03-20', type: '线上培训', topic: '农产品电商运营基础', duration: '2小时', status: 'completed', score: 4.3 }
    ] },
    { id: 3, name: '罗绒', ethnicity: '藏', phone: '187****7890', county: '茂县', town: '南新镇', type: 'mixed', typeName: '综合种养', mainProduct: '茂县青脆李、茂县苹果', livestock: { yak: 20, sheep: 0, horse: 0 }, area: { farmland: 120, grassland: 800 }, status: 'normal', monthlyIncome: 15200, incomeTrend: [9800, 10500, 11800, 13200, 14500, 15200], trainingRecords: [
      { date: '2026-05-08', type: '线下培训', topic: '茂县李子夏季修剪与病虫害管理', duration: '4小时', status: 'completed', score: 4.9 },
      { date: '2026-04-15', type: '线上培训', topic: '牦牛电子耳标使用培训', duration: '1.5小时', status: 'completed', score: 4.6 }
    ] },
    { id: 4, name: '王秀英', ethnicity: '羌', phone: '135****2345', county: '茂县', town: '凤仪镇', type: 'planting', typeName: '果树种植', mainProduct: '茂县甜樱桃', livestock: {}, area: { farmland: 45, grassland: 0 }, status: 'attention', monthlyIncome: 8500, incomeTrend: [6200, 6500, 7800, 8200, 8300, 8500], trainingRecords: [] },
    { id: 5, name: '尼玛', ethnicity: '藏', phone: '136****9012', county: '若尔盖县', town: '唐克镇', type: 'breeding', typeName: '牦牛养殖', mainProduct: '牦牛、藏绵羊', livestock: { yak: 230, sheep: 120, horse: 5 }, area: { farmland: 0, grassland: 3800 }, status: 'normal', monthlyIncome: 18500, incomeTrend: [12000, 13200, 14500, 15800, 17200, 18500], trainingRecords: [
      { date: '2026-04-20', type: '线下培训', topic: '牦牛口蹄疫防控与春季防疫', duration: '3小时', status: 'completed', score: 4.7 }
    ] },
    { id: 6, name: '李建国', ethnicity: '汉', phone: '158****4567', county: '汶川县', town: '三江镇', type: 'planting', typeName: '果树种植', mainProduct: '甜樱桃（车厘子）、猕猴桃', livestock: {}, area: { farmland: 65, grassland: 0 }, status: 'normal', monthlyIncome: 11200, incomeTrend: [5800, 7200, 8400, 9600, 10500, 11200], trainingRecords: [
      { date: '2026-05-05', type: '线下培训', topic: '甜樱桃采收与产后处理', duration: '2小时', status: 'completed', score: 4.4 },
      { date: '2026-04-10', type: '线上培训', topic: '短视频拍摄与剪辑入门', duration: '2小时', status: 'completed', score: 4.1 }
    ] },
    { id: 7, name: '陈达尔', ethnicity: '羌', phone: '139****6789', county: '松潘县', town: '川主寺镇', type: 'planting', typeName: '中药材种植', mainProduct: '松潘川贝母、松贝中药材', livestock: { sheep: 30 }, area: { farmland: 50, grassland: 500 }, status: 'normal', monthlyIncome: 9800, incomeTrend: [6800, 7200, 7800, 8500, 9200, 9800], trainingRecords: [
      { date: '2026-03-25', type: '线下培训', topic: '川贝母规范化种植技术', duration: '3小时', status: 'completed', score: 4.8 }
    ] },
    { id: 8, name: '阿依', ethnicity: '藏', phone: '181****1234', county: '红原县', town: '安曲镇', type: 'breeding', typeName: '牦牛养殖', mainProduct: '麦洼牦牛、牦牛奶制品', livestock: { yak: 98, sheep: 60, horse: 2 }, area: { farmland: 0, grassland: 1800 }, status: 'warning', monthlyIncome: 8900, incomeTrend: [7800, 8000, 8200, 8400, 8600, 8900], trainingRecords: [
      { date: '2026-04-18', type: '线上培训', topic: '牦牛奶制品加工技术', duration: '2小时', status: 'completed', score: 4.5 }
    ] },
    { id: 9, name: '张晓峰', ethnicity: '汉', phone: '152****5678', county: '金川县', town: '勒乌镇', type: 'planting', typeName: '果树种植', mainProduct: '金川雪梨', livestock: {}, area: { farmland: 90, grassland: 0 }, status: 'attention', monthlyIncome: 7600, incomeTrend: [4200, 5100, 5800, 6500, 7200, 7600], trainingRecords: [] },
    { id: 10, name: '格桑卓玛', ethnicity: '藏', phone: '183****9012', county: '黑水县', town: '知木林乡', type: 'breeding', typeName: '蜂蜜养殖', mainProduct: '黑水中蜂蜜', livestock: {}, area: { farmland: 0, grassland: 600 }, status: 'normal', monthlyIncome: 6500, incomeTrend: [3200, 3800, 4200, 5000, 5800, 6500], trainingRecords: [
      { date: '2026-04-08', type: '线下培训', topic: '中蜂科学养殖与蜂蜜品质提升', duration: '3小时', status: 'completed', score: 4.9 }
    ] },
    { id: 11, name: '刘明', ethnicity: '汉', phone: '156****3456', county: '理县', town: '杂谷脑镇', type: 'planting', typeName: '蔬菜种植', mainProduct: '高山蔬菜', livestock: {}, area: { farmland: 40, grassland: 0 }, status: 'normal', monthlyIncome: 7200, incomeTrend: [4800, 5200, 5800, 6200, 6800, 7200], trainingRecords: [
      { date: '2026-05-12', type: '线上培训', topic: '高山蔬菜病虫害绿色防控', duration: '1.5小时', status: 'completed', score: 4.3 }
    ] },
    { id: 12, name: '王建国', ethnicity: '羌', phone: '137****7890', county: '茂县', town: '南新镇', type: 'mixed', typeName: '综合种养', mainProduct: '茂县李子电商', livestock: {}, area: { farmland: 75, grassland: 300 }, status: 'normal', monthlyIncome: 13500, incomeTrend: [7500, 8800, 10200, 11500, 12800, 13500], trainingRecords: [
      { date: '2026-04-28', type: '线下培训', topic: '电商运营与直播带货实操', duration: '4小时', status: 'completed', score: 4.6 },
      { date: '2026-03-30', type: '线上培训', topic: '农产品短视频拍摄与剪辑', duration: '2小时', status: 'completed', score: 4.4 }
    ] },
    { id: 13, name: '达瓦', ethnicity: '藏', phone: '189****2345', county: '阿坝县', town: '各莫镇', type: 'breeding', typeName: '牦牛养殖', mainProduct: '牦牛、藏绵羊', livestock: { yak: 180, sheep: 200, horse: 4 }, area: { farmland: 0, grassland: 3200 }, status: 'normal', monthlyIncome: 14200, incomeTrend: [9500, 10200, 11500, 12500, 13500, 14200], trainingRecords: [
      { date: '2026-05-06', type: '线下培训', topic: '牦牛口蹄疫防控与春季防疫', duration: '3小时', status: 'completed', score: 4.7 }
    ] },
    { id: 14, name: '周芳', ethnicity: '汉', phone: '155****6789', county: '九寨沟县', town: '永乐镇', type: 'planting', typeName: '果树种植', mainProduct: '花椒、核桃', livestock: {}, area: { farmland: 55, grassland: 0 }, status: 'normal', monthlyIncome: 6800, incomeTrend: [3800, 4200, 4800, 5500, 6200, 6800], trainingRecords: [] },
    { id: 15, name: '尔玛', ethnicity: '羌', phone: '182****0123', county: '马尔康市', town: '梭磨镇', type: 'mixed', typeName: '综合种养', mainProduct: '牦牛、中药材', livestock: { yak: 45, sheep: 20 }, area: { farmland: 30, grassland: 1200 }, status: 'normal', monthlyIncome: 10500, incomeTrend: [6800, 7500, 8200, 9000, 9800, 10500], trainingRecords: [
      { date: '2026-04-12', type: '线下培训', topic: '中药材规范化种植技术', duration: '3小时', status: 'completed', score: 4.5 }
    ] }
  ],

  // ========== 认养方案数据 ==========
  adoptionPlans: [
    { id: 1, name: '麦洼牦牛认养计划', breed: '麦洼牦牛', county: '红原县', totalCount: 30, adoptedCount: 22, price: 200, priceUnit: '月/头', period: '12个月', status: 'active', isLive: true, liveViewers: 1234, adopters: [
      { name: '张先生', avatar: '', duration: '8个月', messages: 12 },
      { name: '李女士', avatar: '', duration: '6个月', messages: 8 },
      { name: '王先生', avatar: '', duration: '3个月', messages: 3 }
    ] },
    { id: 2, name: '小金苹果树认养计划', breed: '小金苹果（金冠系列）', county: '小金县', totalCount: 100, adoptedCount: 67, price: 150, priceUnit: '季/棵', period: '3个月', status: 'active', isLive: false, liveViewers: 0, adopters: [
      { name: '陈女士', avatar: '', duration: '2个月', messages: 5 }
    ] },
    { id: 3, name: '茂县青脆李认养计划', breed: '茂县青脆李', county: '茂县', totalCount: 50, adoptedCount: 38, price: 120, priceUnit: '季/棵', period: '3个月', status: 'active', isLive: true, liveViewers: 567, adopters: [] },
    { id: 4, name: '茂县甜樱桃认养计划', breed: '茂县甜樱桃', county: '茂县', totalCount: 30, adoptedCount: 30, price: 300, priceUnit: '年/棵', period: '1年', status: 'completed', isLive: false, liveViewers: 0, adopters: [] }
  ],

  // ========== 牦牛电子户口数据 ==========
  yakProfile: {
    id: 'MW-2024-0517',
    breed: '麦洼牦牛',
    gender: '母',
    age: 3,
    color: '黑色',
    weight: 280,
    weightUnit: 'kg',
    earTag: 'ET-51-2024-00382',
    beidouCollar: 'BD-HY-08156',
    healthStatus: 'healthy',
    tags: ['已免疫', '已配种', '已参保', '区块链上链', '北斗定位'],
    healthRecords: [
      { date: '2026-05-10', type: '常规体检', detail: '体温38.2°C 体重278kg 各项指标正常' },
      { date: '2026-04-15', type: '疫苗接种', detail: '口蹄疫疫苗 第三针' },
      { date: '2026-03-20', type: '驱虫处理', detail: '体内驱虫 伊维菌素' },
      { date: '2026-02-08', type: '健康检查', detail: '发现轻微皮肤病 已治疗' },
      { date: '2025-12-01', type: '配种记录', detail: '与MW-2022-0089交配 预产期2026-10' }
    ],
    location: {
      lat: '32°48\'12"N',
      lng: '102°33\'45"E',
      altitude: 3520,
      accuracy: '≤10m',
      lastUpdate: '2026-05-17 09:25:00',
      battery: 82,
      status: 'online',
      farm: '红原县邛溪镇扎西家庭牧场'
    },
    trajectory: {
      date: '2026-05-17',
      totalDistance: 8.7,
      activeArea: 2.3,
      fenceStatus: 'normal',
      waypoints: [
        { time: '06:00', x: 30, y: 60, label: '清晨休息点', type: 'rest' },
        { time: '07:30', x: 45, y: 45, label: '开始觅食', type: 'graze' },
        { time: '09:25', x: 60, y: 35, label: '当前位置', type: 'current' },
        { time: '12:00', x: 40, y: 70, label: '河边饮水', type: 'water' },
        { time: '15:00', x: 55, y: 50, label: '下午放牧区', type: 'graze' },
        { time: '18:00', x: 35, y: 55, label: '归牧点', type: 'rest' }
      ]
    },
    pedigree: {
      father: { id: 'MW-2021-0123', breed: '麦洼牦牛', color: '红色', age: 5, earTag: 'ET-51-2021-00234' },
      mother: { id: 'MW-2020-0045', breed: '麦洼牦牛', color: '黑色', age: 6, earTag: 'ET-51-2020-00089' },
      siblings: []
    },
    productionRecords: {
      totalCalves: 1,
      monthlyMilk: 180,
      currentStatus: '妊娠期',
      expectedDelivery: '2026-10'
    },
    blockchainRecords: [
      { time: '2026-05-10', action: '常规体检数据上链', hash: '0x7a3f...8b2c' },
      { time: '2026-04-15', action: '疫苗接种记录上链', hash: '0x9c2d...1f4e' },
      { time: '2026-03-20', action: '驱虫处理记录上链', hash: '0x3e7a...c5d1' },
      { time: '2025-12-01', action: '配种记录上链', hash: '0x5b8c...d2f6' }
    ]
  },

  // ========== 图表数据 ==========
  chartData: {
    ndviTrend: {
      labels: ['05-01','05-02','05-03','05-04','05-05','05-06','05-07','05-08','05-09','05-10','05-11','05-12','05-13','05-14','05-15','05-16','05-17'],
      values: [0.72, 0.73, 0.71, 0.74, 0.73, 0.72, 0.70, 0.68, 0.65, 0.63, 0.61, 0.60, 0.62, 0.64, 0.66, 0.68, 0.72]
    },
    livestockTrend: {
      months: ['2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05'],
      yak: [205.2, 205.5, 206.1, 206.8, 207.2, 207.5, 207.8, 208.0, 208.1, 208.3, 208.5, 208.7],
      sheep: [28.5, 28.2, 27.8, 27.5, 27.2, 26.8, 26.5, 26.3, 26.0, 25.8, 25.5, 25.2],
      pig: [31.2, 31.0, 30.8, 30.8, 30.9, 30.9, 31.0, 31.0, 31.0, 30.9, 30.9, 30.9]
    },
    cropProduction: {
      labels: ['茂县李子', '小金苹果', '茂县甜樱桃', '牦牛肉', '牦牛奶'],
      values: [10.2, 8.5, 2.8, 8.31, 15.44],
      unit: '万吨'
    },
    landUse: {
      labels: ['草地', '林地', '耕地', '建设用地及其他'],
      values: [4700, 5878, 74.66, 200],
      unit: '万亩'
    },
    alertTrend: {
      months: ['2025-12','2026-01','2026-02','2026-03','2026-04','2026-05'],
      disease: [15, 12, 18, 22, 20, 25],
      device: [8, 10, 7, 12, 9, 15],
      ecology: [5, 4, 6, 8, 7, 10],
      weather: [3, 5, 8, 4, 6, 3],
      violation: [2, 1, 3, 2, 4, 2]
    },
    incomeRanking: [
      { county: '红原县', income: 28500, change: 12.3 },
      { county: '若尔盖县', income: 24800, change: 8.5 },
      { county: '汶川县', income: 22300, change: 15.2 },
      { county: '茂县', income: 21000, change: 11.8 },
      { county: '松潘县', income: 18600, change: 9.2 },
      { county: '小金县', income: 17500, change: 18.5 },
      { county: '金川县', income: 16200, change: 7.6 },
      { county: '黑水县', income: 14800, change: 10.1 },
      { county: '理县', income: 13500, change: 13.2 },
      { county: '马尔康市', income: 12800, change: 6.8 },
      { county: '壤塘县', income: 11200, change: 8.9 },
      { county: '阿坝县', income: 10800, change: 7.2 },
      { county: '九寨沟县', income: 9500, change: 14.5 }
    ],
    scanDistribution: [
      { region: '四川', count: 5680 },
      { region: '北京', count: 1820 },
      { region: '上海', count: 1450 },
      { region: '广东', count: 1230 },
      { region: '浙江', count: 980 },
      { region: '江苏', count: 750 },
      { region: '重庆', count: 620 },
      { region: '陕西', count: 450 }
    ],
    scanTrend: [120, 135, 148, 162, 155, 180, 195, 210, 225, 240, 235, 250, 265, 280, 290, 310, 325, 340, 355, 365, 380, 395, 410, 420, 435, 445, 455, 465, 475, 490],
    // 农场健康指数迷你图表
    healthIndex: [92, 93, 91, 94, 93, 92, 90],
    // 牧场环境指标
    envIndicators: {
      labels: ['周一','周二','周三','周四','周五','周六','周日'],
      temp: [10, 12, 9, 11, 13, 12, 12],
      humidity: [65, 68, 72, 70, 66, 64, 68]
    },
    // 营销数据
    marketingTrend: {
      labels: ['1月','2月','3月','4月','5月'],
      publish: [12, 18, 25, 32, 38],
      interaction: [450, 680, 1200, 1850, 2400],
      followers: [320, 480, 750, 1100, 1560]
    }
  },

  // ========== 创业助手数据 ==========
  startup: {
    policies: [
      { id: 1, title: '2026年四川省返乡入乡创业补贴政策', source: '省农业农村厅', level: '省级', deadline: '长期有效', status: 'active' },
      { id: 2, title: '阿坝州电商助农创业扶持资金', source: '阿坝州商务局', level: '州级', deadline: '2026-12-31', status: 'active' },
      { id: 3, title: '红原县牦牛产业创业贷款贴息', source: '红原县乡村振兴局', level: '县级', deadline: '2026-09-30', status: 'active' },
      { id: 4, title: '小金县苹果产业创业扶持政策', source: '小金县农业农村局', level: '县级', deadline: '2026-11-30', status: 'active' }
    ],
    courses: [
      { id: 1, title: '牦牛科学养殖与疫病防控实战', type: '线下培训', date: '2026-05-25', duration: '3小时', enrolled: 32, capacity: 50, status: 'enrolling' },
      { id: 2, title: 'AI种养工具使用入门', type: '线上培训', date: '随时学习', duration: '1.5小时', enrolled: 128, capacity: 999, status: 'available' },
      { id: 3, title: '农产品短视频拍摄与剪辑', type: '线上培训', date: '随时学习', duration: '2小时', enrolled: 89, capacity: 999, status: 'available' },
      { id: 4, title: '电商运营与直播带货实操', type: '线下培训', date: '2026-06-01', duration: '4小时', enrolled: 45, capacity: 60, status: 'upcoming' }
    ],
    successCases: [
      { name: '罗绒', ethnicity: '藏', county: '红原县', project: '麦洼牦牛标准化养殖基地', year: 2023, summary: '带动12户牧民增收35%，年产值突破120万元', tags: ['牦牛养殖'] },
      { name: '杨小梅', ethnicity: '汉', county: '小金县', project: '"金冠红"苹果品牌打造', year: 2022, summary: '年销售额突破80万元，带动周边20户果农', tags: ['苹果种植'] },
      { name: '王建国', ethnicity: '羌', county: '茂县', project: '茂县李子电商直播团队', year: 2024, summary: '累计直播销售李子50万斤，团队6人', tags: ['电商创业'] }
    ],
    communityPosts: [
      { author: '罗绒', time: '2小时前', content: '今年的牦牛认养订单已经满了，感谢平台帮助！' },
      { author: '匿名用户', time: '5小时前', content: '请教各位老师，牦牛奶的巴氏杀菌温度和时间怎么控制？' },
      { author: '杨小梅', time: '1天前', content: '小金苹果马上成熟了，有需要认养的联系我！' },
      { author: '陈达尔', time: '2天前', content: '今年川贝母的长势不错，预计产量能比去年提升20%。' }
    ]
  },

  // ========== 聊天记录数据 ==========
  chatMessages: [
    { role: 'user', content: '我家的麦洼牦牛最近食欲下降，精神不振，体温38.8°C，怎么办？', time: '2026-05-17 09:30' },
    { role: 'ai', content: '根据症状描述，结合当前红原县气温和草场状况，可能的原因有以下几个：\n\n1. **气温骤降导致的应激反应**：本周红原县降温约8°C，牦牛可能出现采食量下降。建议增加补饲精料量15%-20%。\n\n2. **寄生虫感染**：4-6月是体外寄生虫（蜱、螨）和体内寄生虫高发期。建议观察牦牛体表是否有蜱虫附着，粪便是否异常。\n\n3. **口蹄疫前期症状**：虽然体温38.8°C略低于典型口蹄疫（40°C+），但不能完全排除。请检查口腔黏膜和蹄部是否有水疱。\n\n建议您先检查以下几点：牦牛体表是否有蜱虫附着、粪便是否异常、口腔和蹄部有无病变。如有异常请及时联系红原县畜牧站。', time: '2026-05-17 09:30' },
    { role: 'user', content: '牦牛身上有些脱毛，会不会是寄生虫？', time: '2026-05-17 09:35' },
    { role: 'ai', content: '脱毛+食欲下降的组合症状，寄生虫感染的可能性较大。红原县4-6月是体外寄生虫高发期。\n\n**建议处理方案：**\n1. 使用伊维菌素进行体内驱虫，按体重0.2mg/kg皮下注射\n2. 体表使用双甲脒或溴氰菊酯溶液进行药浴/喷淋\n3. 隔离发病个体，避免交叉感染\n4. 加强圈舍通风和清洁\n\n如果3天后症状未改善，建议联系红原县畜牧站进行现场采样检测。', time: '2026-05-17 09:36' }
  ],

  // ========== 聊天预设回复 ==========
  chatPresets: {
    '牦牛': '根据您描述的牦牛相关症状，建议从以下几方面排查：\n\n1. **健康检查**：观察牦牛精神状态、采食量、反刍情况、粪便形态\n2. **体温监测**：正常体温为37.5-39.0°C，持续高于39.5°C需警惕\n3. **寄生虫排查**：春夏交替期注意蜱虫、螨虫等体外寄生虫\n4. **营养评估**：检查补饲精料配比是否合理\n\n如症状持续，建议联系当地畜牧站进行专业检测。红原县畜牧站电话：0837-266XXXX',
    '苹果': '关于苹果种植管理，以下是当前季节的关键注意事项：\n\n1. **花后管理**：及时疏果，每花序留1个中心果\n2. **病虫害防治**：重点防治苹果腐烂病、褐斑病，使用波尔多液预防\n3. **水肥管理**：幼果膨大期适当追施钾肥，促进果实着色\n4. **夏季修剪**：疏除过密枝、直立枝，改善通风透光\n\n小金苹果建议采收期为9月中下旬，注意适时采收确保品质。',
    '李子': '茂县李子种植管理建议：\n\n1. **夏季修剪**：疏除过密枝、徒长枝，培养开心形树冠\n2. **病虫害防治**：重点防治李子褐腐病、食心虫\n3. **水分管理**：果实膨大期保持土壤湿润，采收前15天控制灌水\n4. **采收标准**：青脆李果皮由绿转黄绿时即可采收\n\n茂县青脆李一般在7-8月成熟，建议提前做好电商销售和认养推广准备。',
    '樱桃': '甜樱桃管理要点：\n\n1. **采收后管理**：及时施肥恢复树势，施有机肥为主\n2. **病虫害防治**：采收后喷施波尔多液预防叶片病害\n3. **夏季修剪**：疏除背上枝、竞争枝\n4. **花芽分化期**：6-8月是花芽分化关键期，适当控氮增磷钾\n\n茂县甜樱桃品种建议选择红灯、美早等优良品种，海拔1800-2200m区域品质最佳。',
    '果树': '果树综合管理建议：\n\n1. **土壤管理**：行间生草或覆盖，提高土壤有机质\n2. **水肥一体化**：推荐滴灌施肥，提高水肥利用率\n3. **绿色防控**：优先使用生物农药和物理防治\n4. **品质提升**：合理负载、适时采收、分级包装\n\n建议结合AI种养助手定期巡检果园，及时发现病虫害隐患。',
    '气象': '当前阿坝州气象概况：\n\n- **红原县**：气温3-15°C，多云，风力3级\n- **小金县**：气温10-22°C，晴间多云\n- **茂县**：气温12-25°C，多云转晴\n\n**未来3天趋势**：\n- 18日：大部地区多云转晴，气温回升\n- 19日：松潘、若尔盖高海拔地区有阵雨\n- 20日：全州晴好天气\n\n建议根据天气变化合理安排农牧生产活动。',
    '草场': '草场管理建议：\n\n1. **草畜平衡**：按照核定载畜量控制放牧强度\n2. **轮牧制度**：划分轮牧小区，每个小区放牧7-10天后轮换\n3. **牧草补播**：退化草场补播垂穗披碱草、老芒麦等优良牧草\n4. **围栏管理**：检查围栏完好性，及时修复损坏部分\n\n当前NDVI指数显示部分区域植被指数偏低，建议适当减少放牧密度。',
    '草原': '草原生态保护与合理利用建议：\n\n1. **休牧轮牧**：春季返青期（4-6月）建议适当休牧\n2. **毒杂草防治**：人工清除或生物防治狼毒、棘豆等毒杂草\n3. **鼠虫害防治**：定期监测高原鼠兔、草原毛虫密度\n4. **人工种草**：在退化严重区域建立人工饲草基地\n\n阿坝州天然草原面积452.2万公顷，保护好草原生态是可持续发展的基础。'
  },

  // ========== AIGC生成内容 ==========
  marketingContent: [
    {
      template: '产品介绍',
      title: 'AI为您生成的麦洼牦牛奶产品介绍',
      content_zh: '来自海拔3500米的纯净牧场，每一滴麦洼牦牛奶都承载着川西高原的阳光与清风。\n\n麦洼牦牛——国家地理标志产品，在红原县广袤的天然草场上自由放牧，以300多种高原野生牧草为食，产出的牦牛奶富含共轭亚油酸（CLA）、免疫球蛋白和多种维生素，营养价值远超普通牛奶。\n\n从牧场到餐桌，全程区块链溯源，每一滴奶都可追溯。选择羌藏耕牧智护认证产品，品味最纯正的藏区味道。',
      content_bo: 'སྐར་མ་གངས་ལྗོངས་ནས་ཡོང་བའི་མ་རྩ་འཛམ་གླིང་གི་ཁ་དུག་མེད་པའི་ནད་བྱུང་... (藏文占位)'
    }
  ],

  // ========== 溯源链数据 ==========
  traceChain: [
    { stage: '物流运输', time: '2026-05-16', icon: 'truck', details: { method: '冷链运输', temp: '2-4°C', duration: '48小时', from: '红原县高原牦牛乳制品加工厂', to: '成都市配送中心', vehicle: '川A·U8856' } },
    { stage: '加工生产', time: '2026-05-15', icon: 'factory', details: { factory: '红原县高原乳制品加工厂', process: 'UHT灭菌处理', result: '检测合格', batch: 'HY-20260515-003', report: 'JC-2026-0515-032' } },
    { stage: '原奶采集', time: '2026-05-14', icon: 'milk', details: { farm: '扎西家庭牧场', location: '红原县邛溪镇', altitude: '3,520m', yakId: 'MW-2024-0517', test: '合格', cellCount: '≤40万/ml' } },
    { stage: '牧场环境', time: '2026-05-14', icon: 'mountain', details: { air: '优', water: '优', soil: '优', grassCert: '有机草场', ndvi: 0.78, envId: 'AQ-HY-2026-0514' } },
    { stage: '养殖档案', time: '2026-01-01 至今', icon: 'clipboard', details: { breed: '麦洼牦牛', age: '3岁', health: '优良', vaccine: '口蹄疫3针+驱虫2次', method: '自由放牧+冬季补饲', beidou: '在线监控' } }
  ],

  // ========== 溯源码列表 ==========
  traceCodes: [
    { id: 'QC-2026-05-17-0001', product: '麦洼牦牛奶', breed: '麦洼牦牛', status: 'valid', createTime: '2026-05-17 08:00', scanCount: 156 },
    { id: 'QC-2026-05-17-0002', product: '小金苹果', breed: '小金苹果（金冠系列）', status: 'valid', createTime: '2026-05-17 08:05', scanCount: 89 },
    { id: 'QC-2026-05-16-0015', product: '茂县青脆李', breed: '茂县青脆李', status: 'valid', createTime: '2026-05-16 10:00', scanCount: 234 },
    { id: 'QC-2026-05-16-0014', product: '茂县甜樱桃', breed: '茂县甜樱桃', status: 'valid', createTime: '2026-05-16 09:50', scanCount: 178 },
    { id: 'QC-2026-05-15-0028', product: '牦牛肉干', breed: '牦牛', status: 'valid', createTime: '2026-05-15 14:00', scanCount: 312 },
    { id: 'QC-2026-04-01-0045', product: '麦洼牦牛奶', breed: '麦洼牦牛', status: 'expired', createTime: '2026-04-01 08:00', scanCount: 0 }
  ],

  // ========== 特色产品数据 ==========
  featuredProducts: [
    { name: '小金苹果', county: '小金县', feature: '海拔2200m+日照充足', icon: 'apple' },
    { name: '茂县李子', county: '茂县', feature: '种植面积8.4万亩', icon: 'grape' },
    { name: '麦洼牦牛', county: '红原县', feature: '国家地理标志产品', icon: 'beef' },
    { name: '茂县甜樱桃', county: '茂县', feature: '高原甜樱桃', icon: 'cherry' },
    { name: '松潘川贝母', county: '松潘县', feature: '道地中药材', icon: 'flower2' },
    { name: '金川雪梨', county: '金川县', feature: '百年雪梨', icon: 'trees' }
  ],

  // ========== 无人机巡航数据 ==========
  droneInfo: {
    todayFlights: 12,
    coverage: '156 km²',
    executing: 3,
    standby: 2,
    findings: 1
  },

  // ========== 气象数据 ==========
  weather: {
    current: { temp: 12, humidity: 68, windSpeed: 3.2, condition: 'sunny', desc: '晴' },
    forecast: [
      { day: '明天', icon: 'cloud', tempRange: '8-18°C', desc: '多云' },
      { day: '后天', icon: 'cloud-rain', tempRange: '6-15°C', desc: '小雨' },
      { day: '大后天', icon: 'sun', tempRange: '10-20°C', desc: '晴' }
    ]
  }
};
