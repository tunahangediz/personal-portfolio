import { projects } from "@/data/projects";
import H2 from "@/UI/H2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

function Projects() {
  return (
    <div>
      <H2>Projects</H2>
      <div className="flex flex-col ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex my-4 gap-4 flex-wrap sm:flex-nowrap "
          >
            <div className="group relative">
              <Image
                src={project.image}
                width={600}
                height={200}
                className="rounded"
                alt={project.title}
              />
              <div className="absolute bottom-4 left-4 ">
                <div className="flex items-center text-xs">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center hover:text-2xl transition-all duration-200 py-2 px-4 rounded-lg bg-[#eef0ff] dark:bg-[#d3d8fb] text-[#484f8f] font-medium"
                    >
                      Github <i class="ri-github-fill ml-1 text-[#484f8f] "></i>
                    </Link>
                  )}
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      className="flex items-center ml-4 py-2 px-4  hover:text-2xl transition-all duration-200 rounded-lg  bg-[#eef0ff] dark:bg-[#d3d8fb] text-[#484f8f] font-medium"
                    >
                      View Website <i class="ri-external-link-fill ml-1 "></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="sm:w-[80%] flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-medium mb-4 ">{project.title}</h3>
                <p className="leading-6">{project.description}</p>
              </div>
              <div className="flex gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
