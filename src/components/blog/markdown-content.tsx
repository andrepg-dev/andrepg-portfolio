'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

interface MarkdownContentProps {
  html: string
}

export default function MarkdownContent({ html }: MarkdownContentProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [src, setSrc] = useState<string | null>(null)

  const close = useCallback(() => {
    dialogRef.current?.close()
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
    dialogRef.current?.showModal()
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
            src={src}
            alt=''
            className='max-w-[85vw] sm:max-w-[60vw] max-h-[60vh] rounded-xl object-contain'
          />
        )}
      </dialog>
    </>
  )
}