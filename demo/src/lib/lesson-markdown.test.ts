import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
// @ts-expect-error Node test runner requires the explicit .ts extension for local ESM imports.
import { buildProcessedLessonContent, generateToc, slugifyHeading } from './lesson-markdown.ts'

const sampleMarkdown = `# AI First 行政思维转型：从事务执行到智能协同

> **课程时长**: 90 分钟 | **对象**: 集团行政部门 | **形式**: 讲解 + 场景拆解 + 本地 AI Skill 实操

## 本课概览

### 课程结构导航

## Section 1：从事务执行到流程设计

## Section 2：行政高频场景的 AI First 拆解
`

test('buildProcessedLessonContent removes the page title block before TOC generation', () => {
  const processed = buildProcessedLessonContent(sampleMarkdown)

  assert.doesNotMatch(processed, /^#\s+AI First 行政思维转型/m)

  const toc = generateToc(processed)

  assert.deepEqual(
    toc.map((item) => item.text),
    [
      '本课概览',
      '课程结构导航',
      'Section 1：从事务执行到流程设计',
      'Section 2：行政高频场景的 AI First 拆解',
    ]
  )
})

test('generateToc uses the same heading ids as the rendered markdown headings', () => {
  const processed = buildProcessedLessonContent(sampleMarkdown)
  const toc = generateToc(processed)

  assert.equal(toc.at(-1)?.id, slugifyHeading('Section 2：行政高频场景的 AI First 拆解'))
  assert.equal(toc.at(-1)?.id, 'section-2-行政高频场景的-ai-first-拆解')
})

test('generateToc assigns unique ids to duplicate headings', () => {
  const toc = generateToc(`
## 风险边界
## 风险边界
### 风险边界
`)

  assert.deepEqual(
    toc.map((item) => item.id),
    ['风险边界', '风险边界-2', '风险边界-3']
  )
})

test('generateToc ignores heading-like lines inside fenced code blocks', () => {
  const toc = generateToc(`
## 真实标题

\`\`\`text
# 伪标题
## 也不应该进入目录
\`\`\`

### 真实小节

\`\`\`
# 申请材料
## 缺失字段
\`\`\`
`)

  assert.deepEqual(
    toc.map((item) => item.text),
    ['真实标题', '真实小节']
  )
})

test('all lesson markdown files generate unique toc ids', () => {
  const workspaceRoot = path.resolve(process.cwd(), '..')
  const lessonDirs = fs
    .readdirSync(workspaceRoot)
    .filter((name) => name === 'AI-First行政思维转型' || /^第\d+课-/.test(name))

  for (const lessonDir of lessonDirs) {
    const markdownPath = path.join(workspaceRoot, lessonDir, 'final-content.md')
    if (!fs.existsSync(markdownPath)) continue

    const content = fs.readFileSync(markdownPath, 'utf8')
    const toc = generateToc(buildProcessedLessonContent(content))
    const ids = toc.map((item) => item.id)
    const uniqueIds = new Set(ids)

    assert.equal(
      uniqueIds.size,
      ids.length,
      `${lessonDir} still contains duplicate toc ids: ${ids.join(', ')}`
    )
  }
})
