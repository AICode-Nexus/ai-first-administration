# AI First Administration 课程站开发指南

## 项目概述

- **项目名称**: AI First Administration Learning Site
- **技术栈**: Next.js 15 + TypeScript + Tailwind CSS v4 + React Markdown + Mermaid
- **包管理**: pnpm
- **代码质量**: Biome

## 代码规范

### TypeScript

- 使用严格模式 (`strict: true`)
- 不使用 `any` 类型
- Props 类型使用 interface 定义

### React 组件

- 使用函数式组件
- 保持课程阅读体验清晰，不引入复杂交互
- Markdown 内容从仓库根目录读取，不硬编码正文到组件里

### 样式

- 只使用 Tailwind utility classes
- 使用 `cn()` 工具函数合并条件类名
- 不写内联 style，不使用 CSS Modules

## 内容约束

- 页面文案不得出现“第1课”或暗示当前课程不完整的表达
- 当前课程显示为“专题课”
- 示例材料必须脱敏
- 明确 AI 只做预审，不替代最终审批
