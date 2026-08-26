"use client"

import { Hanken_Grotesk } from "next/font/google"
import Image from "next/image"
import type { Certification } from "@/lib/certifications"

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] })

export default function CertificationItem({
  certification,
}: {
  certification: Certification
}) {
  return (
    <div className={`py-4 ${hankenGrotesk.className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {certification.url ? (
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:underline hover:decoration-double"
              >
                {certification.title}
              </a>
            ) : (
              <span className="font-semibold text-foreground">
                {certification.title}
              </span>
            )}
            {certification.status === "in_progress" && (
              <span className="text-xs text-muted border border-border rounded px-2 py-0.5">
                In progress
              </span>
            )}
          </div>
          <p className="text-muted text-sm mb-1">
            {certification.issuer} &middot; {certification.date}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs text-muted border border-border rounded px-2 py-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <Image
          src={certification.logo}
          alt={`${certification.issuer} logo`}
          width={28}
          height={28}
          className="shrink-0 mt-1"
        />
      </div>
      <hr className="mt-4 text-border" />
    </div>
  )
}
