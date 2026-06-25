import Link from 'next/link'

const highlights = [
  { label: '90 分钟', value: '专题培训' },
  { label: '主实操', value: '行政审批预审 Skill' },
  { label: '落地方式', value: '本地 AI 工作流' },
]

const outcomes = [
  '用 AI First 视角重新描述行政任务',
  '把审批材料检查变成可复用流程',
  '明确 AI 预审与人工审批的边界',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-8 text-sm font-medium text-primary">AICode Nexus · 行政专题课</div>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          AI First 行政思维转型
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
          面向集团行政部门的 90 分钟实践课：从事务执行转向流程设计，用本地 AI Skill
          跑通审批预审、风险检查和标准回复。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="border-l-2 border-primary pl-4">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="mt-1 text-base font-semibold">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/learn"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            进入课程学习
          </Link>
          <a
            href="https://github.com/AICode-Nexus/ai-first-administration"
            className="rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            查看 GitHub 仓库
          </a>
        </div>

        <div className="mt-16 border-t pt-8">
          <h2 className="mb-4 text-sm font-semibold text-muted-foreground">学完你将带走</h2>
          <ul className="grid gap-3 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <li key={outcome} className="text-sm leading-6 text-foreground/90">
                <span className="mr-2 text-primary">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
