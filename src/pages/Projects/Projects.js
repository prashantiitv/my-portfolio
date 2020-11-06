import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ArrowRight16 } from "@carbon/icons-react";
import { ProjectItem, ProjectTitle, SkillContainer, ViewLink } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.displayName}</ProjectTitle>
              <div>
                <Paragraph>{project.summary.replace("  ", "\n")}</Paragraph>
                <ViewLink
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Link
                    <ArrowRight16 />
                  </span>
                </ViewLink>
              </div>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
