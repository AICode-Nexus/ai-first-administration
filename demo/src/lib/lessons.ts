export interface Lesson {
  id: string
  label: string
  title: string
  subtitle: string
  duration: string
  audience: string
  tags: string[]
}

export const lessons: Lesson[] = [
  {
    id: 'lesson-ai-first-admin',
    label: '专题课',
    title: 'AI First 行政思维转型',
    subtitle: '从事务执行到智能协同的 90 分钟实践课',
    duration: '90 分钟',
    audience: '集团行政部门',
    tags: ['AI First', '行政管理', '审批预审', '本地 Skill', '人机分工'],
  },
]
