export interface Certification {
  title: string
  issuer: string
  date: string
  url?: string
  logo: string
  skills: string[]
  status?: "completed" | "in_progress"
}

export const certifications: Certification[] = [
  {
    title: "Agentic AI Engineering with LangChain & LangGraph",
    issuer: "Udemy",
    date: "July 2026",
    url: "https://www.udemy.com/certificate/UC-f304f2d3-8d20-436e-a123-1118c44c0343/",
    logo: "/certifications/udemy.png",
    skills: ["LangChain", "LangGraph", "Prompt Engineering", "RAG", "MCP", "Context Engineering"],
    status: "completed",
  },
  {
    title: "Foundation: Agent Observability & Evaluations",
    issuer: "LangChain Academy",
    date: "August 2026",
    url: "https://academy.langchain.com/certificates/kadgftnndc",
    logo: "/certifications/langchain.png",
    skills: ["Agent Observability", "LLM Evaluation", "LangSmith"],
    status: "completed",
  },
  {
    title: "LangChain Deep Agents",
    issuer: "LangChain Academy",
    date: "April 2026",
    url: "https://academy.langchain.com/certificates/xwsru6fwm6",
    logo: "/certifications/langchain.png",
    skills: ["LangChain", "Multi-step Architectures", "Advanced Agent Design"],
    status: "completed",
  },
  {
    title: "Curso Intensivo de Model Context Protocol",
    issuer: "midudev",
    date: "June 2025",
    url: "https://certificados.midudev.com/63d71c7c-04a3-4fc7-9273-9510f5a2d199.pdf",
    logo: "/certifications/midudev.png",
    skills: ["MCP", "LLM Tool Integration"],
    status: "completed",
  },
  {
    title: "AWS Certified Generative AI Developer - Professional",
    issuer: "Udemy",
    date: "In progress",
    logo: "/certifications/aws.png",
    skills: ["AWS", "Generative AI", "Cloud Architecture"],
    status: "in_progress",
  },
  {
    title: "Frontend Developer Certificate",
    issuer: "HackerRank",
    date: "March 2024",
    url: "https://www.hackerrank.com/certificates/2bf4cbae069c",
    logo: "/certifications/hackerrank.png",
    skills: ["HTML", "CSS", "JavaScript"],
    status: "completed",
  },
]
