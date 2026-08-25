import Footer from "@/components/global/footer"
import Header from "@/components/global/header"
import ProjectItem from "@/components/projects/project-item"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <>
      <Header
        description="Software Developer & AI Agent Engineer"
        section="Projects"
      />
      <hr className="my-2 text-muted" />

      <section className="my-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </section>
      <Footer />
    </>
  )
}
