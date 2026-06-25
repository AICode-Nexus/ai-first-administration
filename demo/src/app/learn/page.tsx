import { lessons } from '@/lib/lessons'
import Link from 'next/link'

const modules = [
  { name: 'Opening Hook', duration: '10 分钟', desc: '为什么行政工作需要 AI First' },
  { name: '思维转型', duration: '20 分钟', desc: '从事务执行转向流程设计' },
  { name: '场景拆解', duration: '20 分钟', desc: '识别适合 AI 的行政高频任务' },
  { name: 'Skill 实操', duration: '25 分钟', desc: '跑通行政审批预审完整流程' },
  { name: '边界与风控', duration: '10 分钟', desc: '明确人机分工和安全边界' },
  { name: 'Closing', duration: '5 分钟', desc: '形成部门落地行动清单' },
]

const principles = [
  { principle: '流程优先', desc: '先拆任务，再选择 AI 参与环节' },
  { principle: '标准输出', desc: '把经验沉淀成检查表、模板和 Skill' },
  { principle: '人做判断', desc: 'AI 做预审，人做审批与例外处理' },
  { principle: '脱敏可练', desc: '课堂案例不依赖真实系统和敏感数据' },
]

export default function LearnPage() {
  const lesson = lessons[0]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <div className="mb-12">
        <div className="mb-3 text-sm font-medium text-primary">专题课</div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          AI First 行政思维转型
        </h1>
        <p className="mb-6 text-base text-muted-foreground md:text-lg">
          不是教“有哪些 AI 工具”，而是教“行政工作如何先用 AI First 方式重新组织任务流程”。
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground md:gap-6">
          <span>90 分钟</span>
          <span>集团行政部门</span>
          <span>讲解 + 场景拆解 + Skill 实操</span>
        </div>
      </div>

      <div className="mb-12 rounded-xl border bg-secondary/30 p-6">
        <h2 className="mb-4 font-semibold">课程流程</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {modules.map((item) => (
            <div key={item.name} className="rounded-lg border bg-background p-3">
              <div className="mb-1 flex items-center justify-between gap-3">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.duration}</div>
              </div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-6 text-2xl font-semibold">课程入口</h2>
      <div className="space-y-3">
        {lessons.map((item) => (
          <Link
            key={item.id}
            href={`/learn/${item.id}`}
            className="group flex items-center gap-3 rounded-xl border p-4 transition-all hover:border-primary hover:shadow-md md:gap-4 md:p-5"
          >
            <span className="flex h-10 shrink-0 items-center justify-center rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground md:h-12">
              {item.label}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold transition-colors group-hover:text-primary md:text-base">
                  {item.title}
                </h3>
                <span className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                  {item.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="hidden text-muted-foreground transition-colors group-hover:text-primary sm:inline">
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-secondary/30 p-6">
        <h2 className="mb-4 font-semibold">四个落地原则</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.principle} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                ✓
              </span>
              <div>
                <div className="text-sm font-medium">{item.principle}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
