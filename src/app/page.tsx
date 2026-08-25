import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import Footer from '@/components/global/footer'

export default function HomePage() {
  return (
    <>
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

      <div className='gap-6 flex flex-col text-xl mt-4'>
        <h4>
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
          LangSmith, powering{' '}
          <Link
            className='underline decoration-double hover:text-accent'
            href={'https://madooai.com'}
            target='_blank'
          >
            Madoo AI
          </Link>{' '}
          under the hood. Observability, LLM evals, deep agents with long-term
          memory, tools, MCP servers, the whole stack.
        </p>

        <ul className='list-disc space-y-2 pl-5 text-xl'>
          <li>Born in Honduras, 2005</li>
          <li>
            Founded @{' '}
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
          <li>Building startups between runs</li>
        </ul>

        <Footer />
      </div>
    </>
  )
}
