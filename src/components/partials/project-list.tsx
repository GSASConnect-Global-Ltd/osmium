import React from "react";
import { Container } from "@/layouts";
import { projectList } from "@/static/data";
import { AnimateY } from "../partials";
import ProjectCard from "./project-card";

export default function ProjectList() {
  return (
    <div className="bg-slate-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
          {projectList.map((project) => (
            <AnimateY key={project.id} staggerAmount={0.35}>
              <ProjectCard key={project.id} {...project} />
            </AnimateY>
          ))}
        </div>
      </Container>
    </div>
  );
}
