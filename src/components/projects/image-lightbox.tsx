"use client"

import { useRef, useCallback, useId } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageLightboxProps extends Omit<ImageProps, "onClick"> {
  transitionName?: string
}

export default function ImageLightbox({
  transitionName,
  ...imageProps
}: ImageLightboxProps) {
  const id = useId()
  const transitionId = transitionName || `lightbox-${id}`
  const dialogRef = useRef<HTMLDialogElement>(null)
  const thumbRef = useRef<HTMLImageElement>(null)
  const fullRef = useRef<HTMLImageElement>(null)

  const open = useCallback(() => {
    const dialog = dialogRef.current
    const thumb = thumbRef.current
    if (!dialog || !thumb) return

    thumb.style.viewTransitionName = transitionId

    if (!document.startViewTransition) {
      dialog.showModal()
      thumb.style.viewTransitionName = ""
      return
    }

    document.startViewTransition(() => {
      thumb.style.viewTransitionName = ""
      dialog.showModal()
      const full = fullRef.current
      if (full) full.style.viewTransitionName = transitionId
    })
  }, [transitionId])

  const close = useCallback(() => {
    const dialog = dialogRef.current
    const thumb = thumbRef.current
    const full = fullRef.current
    if (!dialog || !thumb || !full) return

    full.style.viewTransitionName = ""

    if (!document.startViewTransition) {
      dialog.close()
      return
    }

    document.startViewTransition(() => {
      thumb.style.viewTransitionName = transitionId
      dialog.close()
    }).finished.then(() => {
      thumb.style.viewTransitionName = ""
    })
  }, [transitionId])

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="shrink-0 cursor-zoom-in"
      >
        <Image {...imageProps} ref={thumbRef} />
      </button>

      <dialog
        ref={dialogRef}
        onClick={close}
        className="bg-transparent rounded-xl p-0 border-0 outline-none shadow-2xl m-auto"
      >
        <form method="dialog">
          <button
            type="submit"
            className="fixed top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </form>
        <img
          ref={fullRef}
          src={imageProps.src as string}
          alt={imageProps.alt}
          className="max-w-[60vw] max-h-[60vh] rounded-xl object-contain"
        />
      </dialog>
    </>
  )
}
