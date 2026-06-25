import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

test('LessonContent renders only one table of contents instance', () => {
  const filePath = path.join(process.cwd(), 'src/components/learn/lesson-content.tsx')
  const source = fs.readFileSync(filePath, 'utf8')
  const matches = source.match(/<TableOfContents toc=\{toc\} \/>/g)

  assert.equal(matches?.length ?? 0, 1)
})

test('LessonContent keeps ordered list markers aligned with loose list content', () => {
  const filePath = path.join(process.cwd(), 'src/components/learn/lesson-content.tsx')
  const source = fs.readFileSync(filePath, 'utf8')

  assert.doesNotMatch(source, /list-inside list-decimal/)
  assert.match(source, /list-outside list-decimal/)
  assert.match(source, /li:\s*\(\{ children, \.\.\.props \}\)\s*=>/)
})

test('LessonContent renders markdown images as course illustrations', () => {
  const filePath = path.join(process.cwd(), 'src/components/learn/lesson-content.tsx')
  const source = fs.readFileSync(filePath, 'utf8')

  assert.match(source, /img:\s*\(\{ src, alt, \.\.\.props \}\)\s*=>/)
  assert.match(source, /aspect-video w-full rounded-lg/)
  assert.match(source, /loading="eager"/)
  assert.match(source, /siteBasePath = .*\/ai-first-administration/)
  assert.match(source, /src=\{resolveLessonImageSrc\(src\)\}/)
})

test('LessonContent uses light code block surfaces', () => {
  const filePath = path.join(process.cwd(), 'src/components/learn/lesson-content.tsx')
  const source = fs.readFileSync(filePath, 'utf8')

  assert.match(source, /bg-slate-50/)
  assert.match(source, /text-slate-800/)
  assert.doesNotMatch(source, /bg-\[#0d1117\]/)
  assert.doesNotMatch(source, /text-\[#e6edf3\]/)
})
