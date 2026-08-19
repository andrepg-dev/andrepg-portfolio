import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function HomePage() {
  return (
    <main className='mx-auto w-full max-w-2xl px-6 py-24 tex-lg'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl flex gap-2'>
          Andre Ponce{' '}
          <p className='text-sm flex flex-col justify-end mb-1'>
            Software Developer & AI Agent Engineer
          </p>
        </h3>
        <ThemeToggle />
      </div>

      <hr className='my-2 text-muted' />

      <div className='gap-6 flex flex-col text-lg'>
        <h4 className='text-lg'>
          Hi, welcome to my blog!, here I write about the{' '}
          <Link
            href='/blog/code/'
            className='underline decoration-double hover:text-accent'
          >
            code
          </Link>{' '}
          I ship, the{' '}
          <Link
            href='/blog/ai-agent/'
            className='underline decoration-double hover:text-accent'
          >
            AI agents
          </Link>{' '}
          I build, and the{' '}
          <Link
            href='/blog/books/'
            className='underline decoration-double hover:text-accent'
          >
            books
          </Link>{' '}
          that changed the way I think.
        </h4>

        <p>
          I have been coding differents projects since my 14 years, the first
          platform that I had used to learn was SoloLearn, there I got some
          initial certifications and I practice a lot on my phone, after that I
          get a computer and starter to indigate in every single field that
          attract me the most, those fields were{' '}
          <Link
            href={'https://app.hackthebox.com/users/1094731'}
            target='_blank'
            className='underline decoration-double hover:text-accent'
          >
            CiberSecurity
          </Link>
          , Mobile development, Frontend & Backend development.
        </p>

        <p>
          After I learned mainly web development by watching YouTube Videos and
          creating tons of projects to learn new technologies, I get my first
          job when I was 19. I used to work at{' '}
          <Link
            href={'https://en.shimliapp.com/'}
            target='_blank'
            className='underline decoration-double hover:text-accent'
          >
            Shimli AI{' '}
          </Link>{' '}
          I loved to work with them, it was a dream for me to be working into a
          remotely in a startup that I liked, there I use my previous
          development knowledge and gain more skills by doing team collaboration
        </p>

        <p>
          Lately I have been coding AI Agentic Systems using technologies like
          LangChain, LangGraph and LangSmith, Madoo AI system is built using
          those technologies, I have applied Observability, LLM Evaluation, deep
          agents with long task memory managment, tools and MCP servers.
        </p>

        <ul className='list-disc space-y-2 pl-5 text-lg'>
          <li>Born in Honduras, 2005</li>
          <li>
            Previously founded @{' '}
            <Link
              href='https://hopta.hn'
              className='underline decoration-double'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hopta
            </Link>
            ,{' '}
            <Link
              href='https://zot.so'
              className='underline decoration-double'
              target='_blank'
              rel='noopener noreferrer'
            >
              Zot
            </Link>{' '}
            &{' '}
            <Link
              href='https://madooai.com'
              className='underline decoration-double'
              target='_blank'
              rel='noopener noreferrer'
            >
              Madoo AI
            </Link>
          </li>
          <li>
            Computer Engineering student at
            <Link
              href={'https://ceutec.hn'}
              target='_blank'
              className='underline decoration-double'
            >
              {' '}
              CEUTEC
            </Link>
          </li>
          <li>
            Other things I like: <span>running & startups</span>
          </li>
        </ul>

        <div className='flex gap-4'>
          <Link href={'/blog/'} className='underline decoration-double'>
            Blog
          </Link>
          <Link href={'/projects'} className='underline decoration-double'>
            Projects
          </Link>
          <Link
            href={'/certifications'}
            className='underline decoration-double'
          >
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
        </div>
      </div>
    </main>
  )
}
