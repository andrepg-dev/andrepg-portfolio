import { ThemeToggle } from '@/app/theme-toggle'
import Link from 'next/link'

const PersonaLink = () => {
  return (
    <Link href={'/'} className='hover:underline decoration-double'>
      Andre Ponce's{' '}
    </Link>
  )
}

export default function Header({
  description,
  section,
}: {
  description: string
  section?: React.ReactNode
}) {
  return (
    <div className='flex items-center justify-between'>
      <h3 className='text-2xl flex flex-col'>
        <span className='font-medium'>
          {section ? (
            <span>
              <PersonaLink /> | {section}
            </span>
          ) : (
            <PersonaLink />
          )}
        </span>
        <p className='text-base flex flex-col justify-end mb-1 text-muted'>
          {description}
        </p>
      </h3>
      <ThemeToggle />
    </div>
  )
}
