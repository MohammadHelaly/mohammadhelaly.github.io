import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import Project from "@/components/project";
import { projectsData } from "@/data";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-center gap-14">
          <SectionHeader
            titleText="Projects"
            subtitleText="Some highlights from my body of work."
          />
          {projectsData.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              siteLink={project.siteLink}
              githubLink={project.githubLink}
              images={project.images}
              description={project.description}
              stack={project.stack}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
