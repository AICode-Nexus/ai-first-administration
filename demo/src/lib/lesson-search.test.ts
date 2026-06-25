import assert from 'node:assert/strict'
import test from 'node:test'
// @ts-expect-error Node test runner requires the explicit .ts extension for local ESM imports.
import { getLessonSearchEntries } from './lesson-search.server.ts'
// @ts-expect-error Node test runner requires the explicit .ts extension for local ESM imports.
import { getHighlightParts, searchLessons } from './lesson-search.ts'

test('searchLessons matches administrative preflight content beyond metadata', () => {
  const results = searchLessons('变体练习', getLessonSearchEntries())

  assert.equal(results.length > 0, true)
  assert.equal(results[0]?.id, 'lesson-ai-first-admin')
  assert.equal(results[0]?.matchType, 'content')
  assert.match(results[0]?.matchedText ?? '', /变体练习/)
})

test('getHighlightParts splits matched text with case-insensitive highlights', () => {
  const parts = getHighlightParts('AI First 行政审批预审', 'ai first')

  assert.deepEqual(parts, [
    { text: 'AI First', highlighted: true },
    { text: ' 行政审批预审', highlighted: false },
  ])
})
