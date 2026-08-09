import { ThemeToggle } from "./theme-toggle";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-24">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">Andre Ponce</h3>
        <ThemeToggle />
      </div>
      <hr className="my-2 text-muted" />


      <div className="gap-6 flex flex-col">
        <h4 className="text-lg">Software engineer. I write about the <span className="underline decoration-double cursor-pointer hover:text-accent">code</span> I ship, the <span className="underline decoration-double cursor-pointer hover:text-accent">AI agents</span> I build, and the <span className="underline decoration-double cursor-pointer hover:text-accent">books</span> that change how I think.</h4>

        <h4 className="text-lg">Currently building Hopta, Zot and Madoo AI. I work across the stack — frontend, backend, and the agents that connect both.</h4>

        <h4 className="text-lg">I write when something took me a while to understand: a bug that ate a week, an agent that worked locally and died in production, a book that changed my mind.</h4>

        <ul className="list-disc space-y-2 pl-5 text-lg">
          <li>Born in Honduras</li>
          <li>Founder @ <span className="underline decoration-double">Hopta</span>, <span className="underline decoration-double">Zot</span> & <span className="underline decoration-double">Madoo AI</span></li>
          <li>21 years old</li>
          <li>Student at <span className="underline decoration-double">CEUTEC</span></li>
          <li>I like to use <span className="underline decoration-double">Obsidian</span></li>
        </ul>
      </div>
    </main>
  )
}
