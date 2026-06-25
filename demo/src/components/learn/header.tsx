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
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="brandMarkBg" x1="5" y1="4" x2="31" y2="32">
                  <stop offset="0%" stopColor="#0f766e" />
                  <stop offset="55%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
                <linearGradient id="brandMarkAccent" x1="9" y1="28" x2="28" y2="8">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="32" height="32" rx="9" fill="url(#brandMarkBg)" />
              <path
                d="M8 27C12.5 15 14.75 9 17 9s4.5 6 9 18"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12.3 20.8h9.4" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
              <path
                d="M22.5 10.5l2.2 2.2 4.6-5.3"
                stroke="#d1fae5"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="27" r="2.4" fill="url(#brandMarkAccent)" />
              <circle cx="17" cy="9" r="2.4" fill="#eff6ff" />
              <circle cx="25.5" cy="27" r="2.4" fill="#99f6e4" />
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
