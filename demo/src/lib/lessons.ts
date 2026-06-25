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
    subtitle: '把高频事务转成可复用 AI 预审工作流',
    duration: '90 分钟',
    audience: '集团行政部门',
    tags: [
      'AI First',
      '行政管理',
      '任务拆解',
      '审批预审',
      '本地 Skill',
      'Record & Replay',
      '人机分工',
    ],
  },
]
