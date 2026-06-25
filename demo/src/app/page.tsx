import Link from 'next/link'

const assetBase = process.env.NODE_ENV === 'production' ? '/ai-first-administration' : ''

const highlights = [
  { label: '课程时长', value: '90 分钟' },
  { label: '核心实操', value: '审批预审 Skill' },
  { label: '落地方法', value: '提示词 -> 模板 -> Skill' },
]

const outcomes = [
  '把高频行政事务拆成输入、标准、输出和人工判断',
  '用 AI 先做材料预审、风险提示和标准回复',
  '明确系统查询、制度解释、最终审批的人工边界',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-[92svh] items-center overflow-hidden">
        <img
          src={`${assetBase}/lesson-assets/ai-first-admin-hero.png`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/18" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 text-sm font-medium text-primary">AICode Nexus · 行政专题课</div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              AI First 行政思维转型
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
              把审批材料、流程答疑、表格检查和标准回复，从一次次手工处理，沉淀成可复用的 AI
              预审工作流。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                进入课程学习
              </Link>
              <a
                href="https://github.com/AICode-Nexus/ai-first-administration"
                className="rounded-md border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-white"
              >
                查看课程仓库
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <div className="text-sm font-medium text-primary">课程带走什么</div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            不是学一个工具，而是换一种组织任务的方式。
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="border-l border-slate-300 pl-4">
              <div className="text-sm text-muted-foreground">{item.label}</div>
              <div className="mt-2 text-base font-semibold text-slate-950">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-border px-6 py-12 md:px-8">
        <h2 className="mb-6 text-sm font-semibold text-muted-foreground">学完你将能够</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <li key={outcome} className="text-sm leading-6 text-foreground/90">
              <span className="mr-2 text-primary">✓</span>
              {outcome}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
