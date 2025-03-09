# CCProxy助手 🚀

<div align="center">

![Python](https://img.shields.io/badge/Python-3.x-brightgreen)
![License](https://img.shields.io/badge/许可证-MIT-orange)
![Platform](https://img.shields.io/badge/平台-Windows-lightgrey)

[📥 下载](#-快速开始) | [📖 文档](#-使用指南) | [💬 交流](#-技术支持) | [⭐ Star](https://github.com/Guli-Joy/CCProxy_Helper)

</div>

## 📖 简介
CCProxy助手是一个专业的CCProxy代理服务器管理工具，采用现代化的图形界面设计，为用户提供直观、高效的服务管理体验。无论是日常监控还是账号维护，都能轻松完成。

> 🌟 特点：简单易用 | 功能强大 | 界面美观 | 稳定可靠

## ✨ 特色功能
### 🛠️ 基础配置
- 📂 智能识别CCProxy程序路径（支持多盘符快速搜索）
- 🌐 灵活的验证地址设置（支持多地址配置）
- 🔌 便捷的端口配置管理（自动端口占用检测）
- 🔐 安全的管理密码设置（加密存储）

### 👥 账号管理
- 🔄 智能账号清理系统
  - ⏰ 支持每天/每周/每月定时清理
  - 📅 自定义执行时间和过期天数
  - ⚡ 一键手动清理功能
  - 💾 自动备份被清理账号
- 📊 实时状态监控
  - 🔍 连接日志实时过滤
  - 📈 账号使用统计
  - ⚠️ 异常行为提醒

### ⚙️ 服务控制
- 🚀 一键启动/停止服务
- 📈 实时状态反馈（运行状态、端口状态）
- 📝 详细运行日志（支持自动清理）
- 🔒 安全性检查（端口占用、权限验证）

### 🔄 智能更新
- 🎯 启动自动检查更新
- 🔍 支持手动检查更新
- 📦 基于GitHub Release发布
- 💾 自动备份当前版本
- ↩️ 支持一键回滚
- 🔐 更新文件完整性校验

## 🖥️ 界面展示
> 💫 现代简约设计，突出实用性

<div align="center">

| 功能区 | 特点 |
|-------|------|
| 🌙 主题 | 精心设计的深色主题，护眼美观 |
| 💡 状态 | 清晰直观的状态指示系统 |
| 📊 监控 | 实时更新的日志监控面板 |
| 🎨 布局 | 自适应布局，支持窗口大小调整 |

</div>

## 💻 系统要求

<div align="center">

| 项目 | 要求 | 说明 |
|------|------|------|
| 操作系统 | Windows 10+ | 支持所有64位系统 |
| 必需软件 | CCProxy | 支持最新版本 |
| 运行环境 | Python 3.x | 打包版无需安装Python |
| 存储空间 | 50MB+ | 包含日志和备份空间 |
| 显示器 | 1024x768+ | 支持高DPI缩放 |

</div>

## 📥 快速开始

### 🔰 安装步骤
1. 从[GitHub Release](https://github.com/Guli-Joy/CCProxy_Helper/releases)下载最新版本
2. 解压到任意目录（建议安装在非系统盘）
3. 运行`CCProxyAssistant.exe`

### ⚡ 快速配置
```bash
# 1. 设置CCProxy路径
选择CCProxy安装目录 -> 点击"浏览"按钮 -> 选择包含CCProxy.exe的文件夹

# 2. 配置基本信息
填写端口名称 -> 设置服务端口 -> 设置管理端口 -> 输入管理密码

# 3. 启动服务
点击"启动"按钮 -> 等待服务启动 -> 查看运行状态
```

## 📚 使用指南

### 🔧 详细配置说明

#### 基础配置详解
1. **CCProxy路径设置**
   - 🔍 自动搜索：软件会自动在常见安装目录中查找CCProxy
   - 📂 手动选择：点击"浏览"按钮选择CCProxy所在文件夹
   - 💡 提示：选择包含`CCProxy.exe`的文件夹即可
   - ⚠️ 注意：路径不要包含中文和特殊字符
   - 🔄 智能搜索：支持多盘符快速搜索，自动跳过系统目录

2. **验证地址配置**
   - 🌐 格式：支持域名或IP地址
   - 📝 多地址：使用英文逗号分隔多个地址
   - ⭐ 示例：`example.com,8.8.8.8`
   - 🔔 说明：用于过滤和验证连接日志
   - 💡 建议：建议配置多个地址以提高可靠性
   - 🔍 验证：自动检查地址可访问性

3. **端口配置**
   - 🔌 程序端口：Web服务访问端口(默认5000)
   - 🛡️ 管理端口：CCProxy管理端口(默认88)
   - ⚠️ 注意：请确保端口未被其他程序占用
   - 🔍 检测：启动时自动检查端口占用情况
   - 💡 建议：建议使用非常用端口

4. **管理密码**
   - 🔐 用途：用于访问CCProxy管理接口
   - 🔑 要求：必须与CCProxy管理密码一致
   - 🛡️ 安全：密码采用AES加密存储
   - 📝 建议：定期更换密码提高安全性
   - ⚠️ 注意：密码长度建议8位以上

#### 账号清理配置
1. **自动清理设置**
   - ⚙️ 启用选项：勾选"启用自动清理"开启
   - 🕒 执行频率：支持每天/每周/每月
   - ⏰ 执行时间：可设置具体小时和分钟
   - 📅 过期天数：超过设定天数的账号将被清理
   - 📊 统计报告：每次清理后生成详细报告
   - 💾 备份功能：自动备份被清理的账号

2. **清理规则说明**
   ```ini
   # 自动清理将处理以下账号：
   ✓ 已禁用的账号
   ✓ 超过过期时间的账号
   ✓ 设置了自动禁用的账号
   ✓ 长期未使用的账号
   
   # 清理时将：
   ✓ 备份账号数据
   ✓ 记录清理日志
   ✓ 自动重启服务
   ✓ 生成清理报告
   ```

3. **手动清理功能**
   - 🎯 即时清理：点击"立即清理"按钮
   - 📊 清理报告：显示清理结果和数量
   - 🔄 自动重启：清理完成后自动重启CCProxy
   - 💾 数据备份：自动备份被清理的账号数据
   - 📝 日志记录：详细记录清理过程

#### 服务管理配置
1. **启动前检查**
   ```ini
   # 启动服务前自动检查：
   ✓ 所有必填配置完整性
   ✓ 端口占用情况
   ✓ CCProxy程序可访问性
   ✓ 管理密码正确性
   ✓ 系统权限要求
   
   # 启动流程：
   1. 检查配置完整性
   2. 验证端口可用性
   3. 测试CCProxy连接
   4. 启动Web服务
   5. 开始监控日志
   6. 初始化清理定时器
   ```

2. **运行状态监控**
   - 🟢 运行中：显示绿色状态
   - 🔴 未运行：显示红色状态
   - 📝 日志：实时显示运行日志
   - 📊 监控：实时显示连接状态
   - 🔍 诊断：自动检测异常状况
   - ⚠️ 警告：异常情况实时提醒

#### 更新配置
1. **自动更新机制**
   - 🔄 启动检查：程序启动3秒后自动检查
   - 📦 更新源：GitHub Release
   - 💾 备份：自动备份当前版本
   - 📥 下载：支持断点续传
   - 🔍 校验：文件完整性验证
   - 🔐 安全：HTTPS加密传输

2. **更新流程详解**
   ```ini
   # 更新功能包括：
   ✓ 自动检测新版本
   ✓ 显示更新说明
   ✓ 自动下载更新包
   ✓ 自动备份当前版本
   ✓ 支持更新回滚
   ✓ 保留最近3个备份
   
   # 更新步骤：
   1. 检查新版本
   2. 下载更新包
   3. 验证完整性
   4. 备份当前版本
   5. 安装新版本
   6. 启动新程序
   7. 清理临时文件
   ```

## 🔍 常见问题

<details>
<summary>💭 如何处理端口被占用？</summary>

1. 检查任务管理器中占用端口的程序
2. 关闭占用端口的程序或更改本程序端口
3. 使用`netstat -ano`命令查看端口占用
4. 选择其他可用端口重新配置
</details>

<details>
<summary>💭 如何修复CCProxy路径识别失败？</summary>

1. 确保CCProxy正确安装
2. 手动选择CCProxy.exe所在文件夹
3. 检查路径是否包含中文或特殊字符
4. 尝试使用默认安装路径
</details>

<details>
<summary>💭 如何解决更新失败问题？</summary>

1. 检查网络连接
2. 确保GitHub可以正常访问
3. 尝试手动下载更新包
4. 使用更新回滚功能
5. 检查磁盘空间是否充足
</details>

<details>
<summary>💭 账号清理注意事项？</summary>

1. 首次使用建议先手动清理测试
2. 确保已正确设置过期天数
3. 重要账号建议提前备份
4. 可以通过日志查看清理记录
</details>

## 🤝 技术支持
- 💬 QQ交流群：`1015197745`
- 👨‍💻 作者：故离
- 📦 [GitHub仓库](https://github.com/Guli-Joy/CCProxy_Helper)
- 📧 邮箱：dai573000041@qq.com

## ⚠️ 免责声明
本软件仅供学习和研究使用，使用本软件所产生的任何后果由使用者自行承担。

---

<div align="center">

**如果觉得有帮助，欢迎 Star ⭐**

[返回顶部](#ccproxy助手-)

</div>