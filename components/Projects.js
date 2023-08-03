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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
        {projects.map((project) => (
          <div key={project.id} className="gap-4">
            <div className="group relative ">
              <div className="w-full  h-[200px] object-cover">
                <Image
                  src={project.image}
                  fill
                  className="rounded"
                  alt={project.title}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="absolute bottom-4 right-4 ">
                <div className="flex items-center text-xs w-[220px] h-4   ">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center hover:text-sm transition-all duration-200 py-1 px-2 rounded bg-[#eef0ff] dark:bg-white text-[#474F8F] font-medium "
                    >
                      Github <i class="ri-github-fill ml-1  "></i>
                    </Link>
                  )}
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      className="flex items-center ml-auto py-1 px-2  hover:text-sm transition-all duration-200 rounded bg-[#eef0ff] dark:bg-white text-[#474F8F] font-medium"
                    >
                      View Website <i class="ri-external-link-fill ml-1 "></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 my-2">
              <div>
                <h3 className="text-lg font-medium">{project.title}</h3>
                {/* <p className="leading-6">{project.description}</p> */}
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
