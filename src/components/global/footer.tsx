import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex gap-4'>
      <Link href={'/blog/'} className='underline decoration-double'>
        Blog
      </Link>
      <Link href={'/projects'} className='underline decoration-double'>
        Projects
      </Link>
      <Link href={'/certifications'} className='underline decoration-double'>
        Certifications
      </Link>
      <Link
        href={'https://x.com/iandrepg'}
        className='underline decoration-double'
        target='_blank'
        rel='noopener noreferrer'
      >
        X
      </Link>
      <Link
        href={'https://www.linkedin.com/in/andreponceg'}
        className='underline decoration-double'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn
      </Link>
      <Link
        href={'mailto:asponceg@gmail.com'}
        className='underline decoration-double'
      >
        Email Contact
      </Link>
    </footer>
  )
}
