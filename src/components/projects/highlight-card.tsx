import type { Project } from '@/lib/projects'
import { Hanken_Grotesk } from 'next/font/google'
import Image from 'next/image'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
      <polyline points='15 3 21 3 21 9' />
      <line x1='10' y1='14' x2='21' y2='3' />
    </svg>
  )
}

function ProjectIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' />
    </svg>
  )
}

export default function HighlightCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      className={`group block border border-border bg-muted/5 rounded-lg p-4 hover:border-foreground/30 transition-colors ${hankenGrotesk.className}`}
    >
      <div className='flex items-start justify-between mb-1'>
        <div className='flex items-center gap-2'>
          {project.img ? (
            <Image
              src={project.img}
              alt={project.title}
              width={32}
              height={32}
              className='w-8 h-8 rounded object-cover'
            />
          ) : (
            <div className='w-8 h-8 rounded bg-muted flex items-center justify-center'>
              <ProjectIcon className='w-4 h-4 text-muted' />
            </div>
          )}
          <span className='font-semibold text-foreground text-base'>
            {project.title}
          </span>
        </div>
        <ExternalLinkIcon className='w-4 h-4 text-muted group-hover:text-foreground transition-colors' />
      </div>
      <p className='text-muted text-base mb-3 line-clamp-2'>
        {project.description}
      </p>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-muted border border-border rounded px-2 py-0.5'>
          {project.tag}
        </span>
      </div>
    </a>
  )
}
