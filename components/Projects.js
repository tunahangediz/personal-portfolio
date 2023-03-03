import { projects } from "@/data/projects";
import H2 from "@/UI/H2";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div>
      <H2>Projects</H2>
      {/* <div className="grid sm:grid-cols-2 gap-4 sm:gap-14 pb-12  mt-4 "> */}
      <div className="">
        {projects.map((project) => (
          <div className="flex my-4 gap-4 flex-wrap sm:flex-nowrap ">
            <div className="sm:max-w-[300px]">
              <Image
                src={project.image}
                width={600}
                height={200}
                className="rounded-xl"
              />
            </div>

            <div>
              <h3>SADFSDAF</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, minus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
