import { skills } from "@/data/skills";
import H2 from "@/UI/H2";

function Skills() {
  return (
    <div className="border-b border-[#e8eafd] dark:border-[#3c448a] pb-12">
      <H2>Skills</H2>
      <div className="flex justify-start gap-4 flex-wrap mt-4 ">
        {skills.map((skill) => (
          <div
            key={skill}
            className="py-2 px-4 rounded-lg bg-[#eef0ff] dark:bg-[#d3d8fb] text-[#484f8f] font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
