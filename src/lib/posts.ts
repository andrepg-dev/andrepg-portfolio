export interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
}

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function getReadingTime(content: string): string {
  return readingTime(content)
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags.includes(tag))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const posts: Post[] = [
  {
    slug: 'building-ai-agents-with-langgraph',
    title: 'Building AI Agents with LangGraph',
    date: '2026-08-15',
    tags: ['ai-agent', 'langchain'],
    excerpt:
      'A deep dive into building persistent, tool-using AI agents with LangGraph — the framework that finally makes agentic workflows manageable.',
    content: `When I first started building AI agents, the biggest pain point wasn't the LLM calls themselves — it was managing state. Every agent needs to remember what it did five steps ago, which tools it already called, and what the user actually asked for. LangGraph solves this in a way that finally feels right.

The core idea is simple: model your agent as a graph. Nodes are functions that do work — call an LLM, invoke a tool, transform data. Edges define the flow between them. But the magic is in the state. LangGraph gives you a typed state object that persists across every node execution, so your agent always has full context.

Here's what a basic agent loop looks like in practice. You define a state schema with TypeScript, create your nodes, wire them together, and compile the graph. The compiled graph handles checkpointing, branching, and even human-in-the-loop interrupts out of the box.

The real power shows up when you need long-running tasks. I built a research agent for Madoo AI that crawls the web, synthesizes findings, and produces reports. Without LangGraph, managing the state across dozens of tool calls would be a nightmare. With it, each step is just a function that reads from and writes to a shared state object.

One thing I learned the hard way: keep your nodes small. Each node should do one thing well. If a node is doing too much, split it. The graph structure makes this natural — you just add more nodes and edges.

LangSmith integrates seamlessly for observability. Every graph execution is traced, so you can see exactly what happened at each step, how long it took, and where things went wrong. This alone is worth the adoption cost.

If you're building anything more complex than a simple chatbot, I'd strongly recommend looking at LangGraph. It turns agent development from "duct tape and prayers" into actual engineering.`,
  },
  {
    slug: 'why-i-switched-to-nextjs-16',
    title: 'Why I Switched to Next.js 16',
    date: '2026-08-02',
    tags: ['code', 'nextjs'],
    excerpt:
      'The breaking changes in Next.js 16 that actually matter, and why the upgrade was worth it for this portfolio.',
    content: `Next.js 16 has breaking changes. That's not news. But after spending a weekend migrating this portfolio, I want to share what actually changed, what matters, and why I think the direction is right.

The biggest shift is how types work with routes. The old manual type definitions are gone — Next.js 16 gives you LayoutProps<'/'> and similar helpers that infer types from your actual route structure. It's a small change that eliminates a whole class of bugs.

Server components are now the default in a stricter way. Every component is a server component unless you explicitly add 'use client'. This sounds like a minor detail, but it changes how you think about data fetching. The mental model shifts from "how do I get data to the client?" to "how do I keep data on the server as long as possible?"

The App Router has matured significantly. Route groups, parallel routes, intercepting routes — these aren't experimental anymore. They're the recommended patterns. If you're still on Pages Router, the migration path is clearer now than it was in version 14 or 15.

For this portfolio specifically, the upgrade let me simplify the layout structure. The root layout handles fonts, metadata, and theme persistence. Each page defines its own content width and spacing. There's no shared navigation component because the site is simple enough that each page stands alone.

One thing I'd warn about: read the migration guide before upgrading. The deprecation list is real. Don't just bump the version number and hope for the best. I spent an hour fixing type errors that could have been avoided with a five-minute read.

The performance improvements are noticeable. Cold starts are faster, the dev server is more responsive, and the build output is smaller. For a small portfolio site, these differences are marginal. For a larger application, they'd be significant.

Overall, Next.js 16 feels like the version where the App Router stopped being "new" and started being "the way you do it." If you're starting a new project, I'd go straight to 16.`,
  },
  {
    slug: 'how-i-use-mcp-servers-in-production',
    title: 'How I Use MCP Servers in Production',
    date: '2026-07-20',
    tags: ['ai-agent', 'code'],
    excerpt:
      'Model Context Protocol servers have changed how I connect AI agents to external tools. Here is what I have learned shipping them.',
    content: `MCP — Model Context Protocol — is one of those ideas that sounds simple but changes everything once you actually use it. The premise: give AI agents a standardized way to discover and call external tools, without tight coupling to any specific LLM provider.

I started using MCP servers at Madoo AI, where we needed agents to interact with databases, APIs, and internal services. Before MCP, every tool integration was a one-off: custom function calling schemas, provider-specific prompts, brittle error handling. MCP replaced all of that with a single protocol.

An MCP server is essentially a service that exposes a set of tools with typed schemas. The agent discovers these tools at runtime, understands their parameters, and calls them through a uniform interface. The server handles authentication, rate limiting, and error responses. The agent just sees clean tool definitions.

The key insight is separation of concerns. The MCP server knows how to talk to your database. The agent knows how to use the tool. Neither needs to know about the other's internals. This makes testing dramatically easier — you can test the server independently, test the agent independently, and trust that they'll work together.

I run several MCP servers in production: one for database queries, one for file system access, one for external API integrations. Each is a small, focused service. If one goes down, the others keep working. The agent can even detect tool failures and adjust its strategy.

Building an MCP server in TypeScript is straightforward. You define your tools with Zod schemas for type safety, implement the handler functions, and wire it up with the MCP SDK. The whole thing can be under 200 lines for a useful server.

The hardest part was not the implementation — it was deciding what tools to expose. Too few, and the agent is limited. Too many, and the agent gets confused about which tool to use. I found that 5-8 well-designed tools per server is the sweet spot.

If you're building agentic systems, MCP is worth adopting now. The ecosystem is growing fast, and the standardization benefit compounds over time.`,
  },
  {
    slug: 'atomic-habits-for-developers',
    title: 'Atomic Habits: Lessons That Changed How I Code',
    date: '2026-07-05',
    tags: ['books'],
    excerpt:
      'James Clear\'s Atomic Habits has nothing to do with programming. And yet, it is one of the most practical books I have read as a developer.',
    content: `I read Atomic Habits expecting a self-help book. What I got was a framework that fundamentally changed how I approach building software — not the code itself, but the process of becoming a better engineer.

The core thesis is simple: small habits, compounded over time, produce remarkable results. Clear calls them "atomic" — tiny units that seem insignificant on their own but accumulate into something powerful. The analogy to software development is immediate.

I used to think learning a new framework meant carving out a weekend for an intensive study session. Now I think in terms of two-minute habits. Read one documentation page. Write one small function. Make one commit. The compound effect is real — I've learned more this way than through any bootcamp.

The identity-based habit model resonated deeply. Clear argues that lasting change comes from shifting who you believe you are, not what you do. I stopped saying "I'm trying to learn Rust" and started saying "I'm a developer who writes Rust." The psychological shift matters more than you'd expect.

Habit stacking is another concept I apply daily. After I finish my morning coffee, I read a technical paper for 15 minutes. After I close my IDE, I write a brief note about what I learned. These are tiny actions, but they've created a learning rhythm that didn't exist before.

The chapter on environment design changed my workspace. I removed distractions, set up a dedicated coding area, and put my phone in another room during deep work. Clear's point is that willpower is finite — design your environment so the right behavior is the default.

For developers specifically, I think the most valuable insight is about Plateau of Latent Potential. You work hard, see no results, and want to quit. Clear shows that this is normal — results are delayed, not absent. The coding you do today pays off weeks or months later, not immediately.

I keep a copy of this book on my desk. Not because I forget the lessons, but because the physical reminder keeps the habits top of mind. If you read one book this year that isn't about code, make it this one.`,
  },
  {
    slug: 'from-sololearn-to-shipped-products',
    title: 'From SoloLearn to Shipped Products',
    date: '2026-06-18',
    tags: ['code'],
    excerpt:
      'How a mobile coding app at 14 led to founding startups by 19 — a non-linear path through self-taught web development.',
    content: `I didn't learn to code in a classroom. I learned on a phone, in a browser, through SoloLearn's bite-sized lessons. I was 14, and the idea that you could write text and make a computer do things felt like magic.

SoloLearn gave me the basics: variables, loops, functions. But more importantly, it gave me confidence. I wrote my first Python script on a bus ride home from school. It didn't do anything useful — it just printed numbers in a pattern. But I'd made something from nothing, and that feeling never went away.

At 15, I got a computer and discovered web development. YouTube became my university. I followed tutorials from Traversy Media, The Net Ninja, and Web Dev Simplified. I built clone after clone — a todo app, a weather app, a chat application. Each one taught me something new, and more importantly, each one was slightly better than the last.

The turning point was when I stopped following tutorials and started building things I actually wanted to use. I created a schedule planner for my school. Then a tool for tracking my running. Then a platform for local musicians. None of these were original ideas — they were all variations of things that existed — but building them myself taught me more than any course could.

At 17, I co-founded Hopta, a platform for buying and selling used items in Honduras. It was scrappy. The code was bad. The design was worse. But it worked, and people used it. That experience taught me that shipping matters more than perfection.

At 19, I joined Shimli AI as my first real job. Going from solo projects to a team was humbling. I learned about code reviews, version control workflows, documentation, and the social side of software development. Being a good developer isn't just about writing code — it's about communicating clearly and collaborating effectively.

Later came Zot and Madoo AI. Each venture pushed me into new territory: AI agents, LLM orchestration, MCP servers. The pattern stayed the same — learn the basics, build something small, iterate relentlessly.

The through-line of this path is simple: build things. Not perfectly. Not completely. Just build them, learn from what breaks, and build the next thing a little better.`,
  },
]
