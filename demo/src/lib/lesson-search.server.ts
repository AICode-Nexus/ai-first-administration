import fs from 'node:fs'
import path from 'node:path'
// @ts-expect-error Node test runner requires the explicit .ts extension for local ESM imports.
import { buildProcessedLessonContent } from './lesson-markdown.ts'
import type { LessonSearchEntry } from './lesson-search'
// @ts-expect-error Node test runner requires the explicit .ts extension for local ESM imports.
import { lessons } from './lessons.ts'

const lessonDirMap: Record<string, string> = {
  'lesson-ai-first-admin': 'AI-First行政思维转型',
}

function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/[*_~]/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function readLessonContent(lessonId: string): string {
  const dirName = lessonDirMap[lessonId]
  if (!dirName) {
    return ''
  }

  const filePath = path.join(process.cwd(), '..', dirName, 'final-content.md')

  try {
    const rawContent = fs.readFileSync(filePath, 'utf8')
    return stripMarkdown(buildProcessedLessonContent(rawContent))
  } catch {
    return ''
  }
}

export function getLessonSearchEntries(): LessonSearchEntry[] {
  return lessons.map((lesson) => ({
    ...lesson,
    content: readLessonContent(lesson.id),
  }))
}
