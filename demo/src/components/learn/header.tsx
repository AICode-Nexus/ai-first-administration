'use client'

import type { LessonSearchEntry } from '@/lib/lesson-search'
import Link from 'next/link'
import { useMobileNav } from './mobile-nav-context'
import { SearchDialog } from './search-dialog'

interface HeaderProps {
  searchEntries: LessonSearchEntry[]
}

export function Header({ searchEntries }: HeaderProps) {
  const { isOpen, toggle } = useMobileNav()

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur md:h-16">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-secondary md:hidden"
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-foreground"
              aria-hidden="true"
              focusable="false"
            >
              {isOpen ? (
                <>
                  <line
                    x1="4"
                    y1="4"
                    x2="14"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="14"
                    y1="4"
                    x2="4"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="3"
                    y1="5"
                    x2="15"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="9"
                    x2="15"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="13"
                    x2="15"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>

          <Link href="/learn" className="flex items-center gap-2 md:gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0f766e', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M8 10h16v4H8z"
                stroke="url(#grad)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M8 18h10" stroke="url(#grad)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M8 23h8" stroke="url(#grad)" strokeWidth="1.8" strokeLinecap="round" />
              <path
                d="M21 19l2 2 4-5"
                stroke="url(#grad)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <div className="text-sm font-semibold">AI First 行政思维转型</div>
              <div className="hidden text-xs text-muted-foreground sm:block">
                90 分钟专题课 · AICode Nexus
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SearchDialog searchEntries={searchEntries} />

          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              首页
            </Link>
            <Link
              href="/learn"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              课程学习
            </Link>
            <a
              href="https://github.com/AICode-Nexus/ai-first-administration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
