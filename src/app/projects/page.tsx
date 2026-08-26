import Footer from '@/components/global/footer'
import Header from '@/components/global/header'
import HighlightCard from '@/components/projects/highlight-card'
import ProjectItem from '@/components/projects/project-item'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const highlightProjects = projects.filter((p) => p.highlight)
  const otherProjects = projects.filter((p) => !p.highlight)

  return (
    <>
      <Header
        description="Projects I've built along the way, from open source experiments to real products."
        section='Projects'
      />
      <hr className='my-2 text-muted' />

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-3 my-4'>
        {highlightProjects.map((project) => (
          <HighlightCard key={project.title} project={project} />
        ))}
      </section>

      <section className='my-4'>
        {otherProjects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </section>
      <Footer />
    </>
  )
}
