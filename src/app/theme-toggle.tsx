'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial: Theme =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'

    setTheme(initial)
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type='button'
      role='switch'
      aria-checked={isDark}
      aria-label='Toggle dark mode'
      onClick={toggle}
      suppressHydrationWarning
      className='relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-switch-border bg-switch-track transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
    >
      <span
        suppressHydrationWarning
        className={`size-3.5 rounded-full bg-switch-knob transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          mounted && isDark ? 'translate-x-[18px]' : 'translate-x-[2px]'
        }`}
      />
    </button>
  )
}
