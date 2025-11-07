# Contributing Guide

感谢您对项目感兴趣！我们欢迎所有形式的贡献。

## 🚀 如何贡献

### 报告 Bug

如果发现 bug，请：
1. 检查 [Issues](https://github.com/your-username/your-repo/issues) 确认该问题未被报告
2. 使用 [Bug Report 模板](https://github.com/your-username/your-repo/issues/new?template=bug_report.md) 创建新 issue

### 提出功能建议

如果您有功能建议，请：
1. 检查 [Issues](https://github.com/your-username/your-repo/issues) 确认该功能未被建议
2. 使用 [Feature Request 模板](https://github.com/your-username/your-repo/issues/new?template=feature_request.md) 创建新 issue

### 提交 Pull Request

1. **Fork 仓库**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **安装依赖**
   ```bash
   pnpm install
   ```

4. **进行更改**
   - 确保代码符合项目的代码风格
   - 添加必要的测试
   - 更新相关文档

5. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```
   
   提交信息应遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：
   - `feat:` 新功能
   - `fix:` Bug 修复
   - `docs:` 文档更改
   - `style:` 代码格式（不影响代码运行的变动）
   - `refactor:` 重构
   - `test:` 添加测试
   - `chore:` 构建过程或辅助工具的变动

6. **推送并创建 PR**
   ```bash
   git push origin feature/your-feature-name
   ```

7. 在 GitHub 上创建 Pull Request，填写 PR 模板中的所有必要信息

## 📋 代码规范

- 使用 ESLint 和 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 编写清晰的提交信息
- 为新功能添加测试

## ✅ PR 检查清单

在提交 PR 之前，请确保：
- [ ] 代码已通过所有测试
- [ ] 代码已通过 lint 检查
- [ ] 已更新相关文档
- [ ] 提交信息遵循 Conventional Commits 规范
- [ ] PR 描述清晰，包含相关的 issue 链接

## 🤝 行为准则

请保持友善和尊重。我们致力于为所有人提供一个欢迎和包容的环境。

## 💡 需要帮助？

如果您有任何问题，请：
- 在 [Discussions](https://github.com/your-username/your-repo/discussions) 中提问
- 创建一个 [Question Issue](https://github.com/your-username/your-repo/issues/new?template=question.md)

感谢您的贡献！🎉