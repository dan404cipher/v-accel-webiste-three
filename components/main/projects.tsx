"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import Link from "next/link";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        what we do best
      </h1>
      <div className="w-full px-10">
        <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
          <div className="flex justify-center mt-10">
            <Link
              href="/services"
              className="px-8 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};