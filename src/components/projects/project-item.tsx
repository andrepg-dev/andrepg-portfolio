"use client"

import Image from "next/image"
import { Hanken_Grotesk } from "next/font/google"
import type { Project } from "@/lib/projects"

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] })

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className={`py-4 ${hankenGrotesk.className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground">{project.title}</span>
            <span className="text-sm text-muted">{project.tag}</span>
          </div>
          <p className="text-muted text-sm mb-3">{project.description}</p>
          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted border border-border rounded px-2.5 py-1 hover:text-foreground hover:border-foreground transition-colors"
            >
              <LinkIcon className="w-3.5 h-3.5" />
              Website
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted border border-border rounded px-2.5 py-1 hover:text-foreground hover:border-foreground transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                Code
              </a>
            )}
          </div>
        </div>
        {project.img && (
          <a href={project.img} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Image
              src={project.img}
              alt={project.title}
              width={120}
              height={80}
              className="rounded object-cover"
            />
          </a>
        )}
      </div>
      <hr className="mt-4 text-border" />
    </div>
  )
}
