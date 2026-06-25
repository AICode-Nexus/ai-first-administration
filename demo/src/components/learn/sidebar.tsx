'use client'

import { lessons } from '@/lib/lessons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMobileNav } from './mobile-nav-context'

function SidebarContent() {
  const pathname = usePathname()
  const { close } = useMobileNav()

  return (
    <nav className="space-y-1 p-4">
      <Link
        href="/learn"
        onClick={close}
        className={cn(
          'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
          pathname === '/learn'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
        )}
      >
        课程总览
      </Link>

      <div className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        课程内容
      </div>

      {lessons.map((lesson) => {
        const href = `/learn/${lesson.id}`
        const isActive = pathname === href

        return (
          <Link
            key={lesson.id}
            href={href}
            onClick={close}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            )}
          >
            <span
              className={cn(
                'flex h-6 shrink-0 items-center justify-center rounded px-2 text-xs font-bold',
                isActive
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              )}
            >
              {lesson.label}
            </span>
            <div className="min-w-0">
              <div className="truncate font-medium">{lesson.title}</div>
              <div className="truncate text-xs opacity-70">{lesson.subtitle}</div>
            </div>
          </Link>
        )
      })}

      <div className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        资源
      </div>
      <a
        href="https://github.com/AICode-Nexus/ai-first-administration"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        GitHub 仓库
      </a>
    </nav>
  )
}

export function Sidebar() {
  const { isOpen, close } = useMobileNav()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 top-14 z-40 bg-black/50 md:hidden"
          onClick={close}
          onKeyDown={(event) => event.key === 'Escape' && close()}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-14 z-40 h-[calc(100vh-56px)] w-72 overflow-y-auto border-r border-border bg-background transition-transform duration-200 ease-in-out',
          'md:sticky md:top-16 md:z-0 md:h-[calc(100vh-64px)] md:translate-x-0 md:bg-secondary/30',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          'shrink-0'
        )}
      >
        <SidebarContent />
      </aside>
    </>
  )
}
