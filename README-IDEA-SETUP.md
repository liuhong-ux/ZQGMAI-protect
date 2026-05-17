# 智乡联 - IDEA + Tomcat 8 配置指南

## 前置条件

1. **IntelliJ IDEA**（Ultimate 版本，Community 版不支持 Tomcat 集成）
2. **Tomcat 8.x** 已在 IDEA 中配置好
   - IDEA → File → Settings → Build, Execution, Deployment → Application Servers
   - 点击 + → Tomcat Server，选择你的 Tomcat 8 安装目录
3. **JDK 1.8** 已配置
4. **Maven**（IDEA 自带或本地安装均可）

## 打开项目

1. 打开 IDEA，选择 **File → Open**
2. 导航到 `D:\创新创业项目\智乡联——AI乡村闲置资源盘活与产业发展赋能平台\frontend`
3. 点击 **OK**
4. IDEA 检测到 `pom.xml` 后会弹出 Maven 导入提示，点击 **Import Changes**（或 **Enable Auto-Import**）

## 验证项目结构

导入成功后，在 IDEA 右侧应该能看到 **Maven** 面板，展开后可看到 `zhixianglian` 项目。

## 配置 Tomcat 运行

### 方案一：使用预置的运行配置（推荐）

1. 点击 IDEA 右上角的运行配置下拉框
2. 选择 **"Tomcat8 - 智乡联"**
3. 如果提示 "Application Server 未配置"，请按以下步骤修正：
   - 点击下拉框 → **Edit Configurations**
   - 在 **Application Server** 下拉中选择你已配置的 Tomcat 8 实例
   - 点击 **OK**

### 方案二：手动创建运行配置

如果预置配置不生效，请手动创建：

1. 点击右上角 **Add Configuration...** → **+** → **Tomcat Server → Local**
2. 配置项：
   - **Name**: `Tomcat8 - 智乡联`
   - **Application Server**: 选择你的 Tomcat 8
   - **HTTP port**: `8080`
   - **Deployment** 标签页 → 点击 **+** → **Artifact**
   - 选择 **`zhixianglian:war exploded`**
   - **Application context**: `/zhixianglian`
3. 点击 **OK**

## 运行项目

1. 选择 **"Tomcat8 - 智乡联"** 运行配置
2. 点击绿色的 ▶ **Run** 按钮
3. 等待 Tomcat 启动
4. 浏览器自动打开：`http://localhost:8080/zhixianglian/`

## 常见问题

### Q: 找不到 "Web" Facet
A: 如果 IDEA 没有自动识别 Web Facet：
   - 按 `Ctrl+Alt+Shift+S` 打开 Project Structure
   - 选择 **Facets** → **+** → **Web**
   - 选择 `zhixianglian` 模块
   - **Web Resource Directory**: 点击文件夹图标，选择项目根目录（`frontend` 文件夹）
   - **Web Module Descriptor**: 选择 `frontend/WEB-INF/web.xml`
   - 点击 **OK**

### Q: 运行报错 "404"
A: 检查 Deployment 中的 Application context 是否为 `/zhixianglian`，并确认浏览器访问地址正确：`http://localhost:8080/zhixianglian/`

### Q: 页面中文乱码
A: 确保 IDEA 中：
   - `File → Settings → Editor → File Encodings` 全部设为 **UTF-8**
   - Tomcat 运行配置的 VM options 增加：`-Dfile.encoding=UTF-8`

### Q: IDEA 提示 "No artifacts configured"
A: 手动创建一个 war exploded artifact：
   - `Ctrl+Alt+Shift+S` → **Artifacts** → **+** → **Web Application: Exploded**
   - 在 **Available Elements** 中找到 `zhixianglian` 模块，右键 → **Put into Output Root**
   - 点击 **OK**
