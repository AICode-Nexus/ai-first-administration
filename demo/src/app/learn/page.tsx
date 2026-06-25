import { lessons } from '@/lib/lessons'
import Link from 'next/link'

const assetBase = process.env.NODE_ENV === 'production' ? '/ai-first-administration' : ''

const modules = [
  { name: 'Opening Hook', duration: '10 分钟', desc: '用真实早晨任务清单建立问题意识' },
  { name: '思维转型', duration: '16 分钟', desc: '从帮我写，转向帮我跑预审流程' },
  { name: '场景拆解', duration: '16 分钟', desc: '判断哪些行政任务值得模板化或 Skill 化' },
  { name: 'Skill 实操', duration: '28 分钟', desc: '跑通电脑报废回购申请预审和变体练习' },
  { name: '提示词到 Skill', duration: '8 分钟', desc: '把一次好提示词沉淀为稳定流程' },
  { name: '边界与风控', duration: '8 分钟', desc: '划清 AI 预审、系统查询和人工审批责任' },
  { name: 'Closing', duration: '4 分钟', desc: '把课堂练习转成 7 天落地行动' },
]

const principles = [
  { principle: '流程优先', desc: '先拆任务，再决定 AI 进入哪一步' },
  { principle: '标准输出', desc: '把经验沉淀成检查表、模板和 Skill' },
  { principle: '人做判断', desc: 'AI 做预审，人做审批与例外处理' },
  { principle: '脱敏可练', desc: '课堂案例不依赖真实系统和敏感数据' },
]

export default function LearnPage() {
  const lesson = lessons[0]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <section className="grid gap-8 md:grid-cols-[1fr_1.05fr] md:items-center">
        <div>
          <div className="mb-3 text-sm font-medium text-primary">专题课</div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">AI First 行政思维转型</h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            不是把行政工作简单交给
            AI，而是把材料检查、风险提醒、标准回复和人工复核重新组织成可复用工作流。
          </p>
          <div className="mt-7 flex flex-wrap gap-4 text-sm text-muted-foreground md:gap-6">
            <span>90 分钟</span>
            <span>集团行政部门</span>
            <span>场景拆解 + Skill 实操</span>
          </div>
        </div>
        <img
          src={`${assetBase}/lesson-assets/ai-first-workflow-shift.png`}
          alt=""
          className="aspect-video w-full rounded-lg border border-slate-200 object-cover shadow-sm"
        />
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">课程流程</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              每一段都要求产出，不停留在概念解释。
            </p>
          </div>
          <Link
            href={`/learn/${lesson.id}`}
            className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            开始学习
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {modules.map((item) => (
            <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.duration}</div>
              </div>
              <div className="text-sm leading-6 text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">四个落地原则</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            课程用行政审批预审贯穿，核心是让 AI 稳定做可重复部分，同时把关键判断留在人手里。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.principle} className="border-l border-slate-300 pl-4">
              <div className="text-sm font-semibold">{item.principle}</div>
              <div className="mt-1 text-sm leading-6 text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
