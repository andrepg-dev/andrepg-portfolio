'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

interface MarkdownContentProps {
  html: string
}

const TRANSITION_NAME = 'lightbox-image'

export default function MarkdownContent({ html }: MarkdownContentProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const thumbRef = useRef<HTMLImageElement | null>(null)
  const fullRef = useRef<HTMLImageElement | null>(null)
  const closingRef = useRef(false)
  const [src, setSrc] = useState<string | null>(null)

  const clearName = (el: HTMLElement) => {
    el.style.viewTransitionName = ''
  }

  const open = useCallback((thumb: HTMLImageElement) => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return

    thumbRef.current = thumb
    thumb.style.viewTransitionName = TRANSITION_NAME

    if (!document.startViewTransition) {
      dialog.showModal()
      clearName(thumb)
      return
    }

    document.startViewTransition(() => {
      clearName(thumb)
      dialog.showModal()
      if (fullRef.current) {
        fullRef.current.style.viewTransitionName = TRANSITION_NAME
      }
    })
  }, [])

  const close = useCallback(() => {
    const dialog = dialogRef.current
    const thumb = thumbRef.current
    const full = fullRef.current
    if (!dialog || !thumb || !full || closingRef.current) return

    closingRef.current = true
    full.style.viewTransitionName = TRANSITION_NAME

    if (!document.startViewTransition) {
      dialog.close()
      clearName(full)
      return
    }

    document.startViewTransition(() => {
      clearName(full)
      thumb.style.viewTransitionName = TRANSITION_NAME
      dialog.close()
    }).finished.then(() => {
      clearName(thumb)
      closingRef.current = false
    })
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleCancel = (e: Event) => {
      e.preventDefault()
      close()
    }

    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [close])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const img = target.closest('img')
    if (!img || img.closest('a')) return

    e.preventDefault()
    setSrc(img.getAttribute('src') ?? '')
    open(img)
  }

  return (
    <>
      <div
        className='prose prose-img:cursor-zoom-in max-w-none text-xl'
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={handleClick}
      />

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
        className='bg-transparent rounded-xl p-0 border-0 outline-none shadow-2xl m-auto'
      >
        <form method='dialog'>
          <button
            type='submit'
            className='fixed top-4 right-4 z-50 text-white/70 hover:text-white transition-colors'
            aria-label='Close'
          >
            <svg
              viewBox='0 0 24 24'
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path d='M18 6L6 18M6 6l12 12' />
            </svg>
          </button>
        </form>
        {src && (
          <img
            ref={fullRef}
            src={src}
            alt=''
            className='max-w-[85vw] sm:max-w-[60vw] max-h-[60vh] rounded-xl object-contain'
          />
        )}
      </dialog>
    </>
  )
}