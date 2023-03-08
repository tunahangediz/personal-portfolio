import { skills } from "@/data/skills";
import H2 from "@/UI/H2";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="border-b border-[#e8eafd] dark:border-[#3c448a] pb-12">
      <H2>Skills</H2>
      <div className="flex justify-start gap-4 flex-wrap mt-4 ">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
