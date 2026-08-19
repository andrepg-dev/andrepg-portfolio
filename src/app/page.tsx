import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function HomePage() {
  return (
    <main className='mx-auto w-full max-w-2xl px-6 py-24 pb-0 text-lg'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl flex flex-col'>
          <span className='font-medium'>Andre Ponce</span>
          <p className='text-base flex flex-col justify-end mb-1 text-muted'>
            Software Developer & AI Agent Engineer
          </p>
        </h3>
        <ThemeToggle />
      </div>

      <hr className='my-2 text-muted' />

      <div className='gap-6 flex flex-col text-lg'>
        <h4 className='text-lg'>
          Hi, welcome to my blog! Here I write about the{' '}
          <Link
            href='/blog/tags/code'
            className='underline decoration-double hover:text-accent'
          >
            code
          </Link>{' '}
          I ship, the{' '}
          <Link
            href='/blog/tags/ai-agent'
            className='underline decoration-double hover:text-accent'
          >
            AI agents
          </Link>{' '}
          I build, and the{' '}
          <Link
            href='/blog/tags/books'
            className='underline decoration-double hover:text-accent'
          >
            books
          </Link>{' '}
          that changed the way I think.
        </h4>

        <p>
          I've been coding since I was 14, starting on SoloLearn (yeah, from my
          phone). From there I got hooked on CyberSecurity, mobile, and
          frontend/backend dev.
        </p>

        <p>
          Landed my first job at 19, working remotely at{' '}
          <Link
            href={'https://en.shimliapp.com/'}
            target='_blank'
            className='underline decoration-double hover:text-accent'
          >
            Shimli AI
          </Link>
          . Built an MCP server there, rewrote the flow builder, shipped mobile
          apps with React Native, dabbled in Vue too, played around with server
          actions, a design system, and global state management.
        </p>

        <p>
          These days I'm deep into AI agentic systems, LangChain, LangGraph,
          LangSmith, powering Madoo AI under the hood. Observability, LLM evals,
          deep agents with long-term memory, tools, MCP servers, the whole
          stack.
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
          <li>Also into running and startups</li>
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
