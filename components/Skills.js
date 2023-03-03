import { skills } from "@/data/skills";
import H2 from "@/UI/H2";

function Skills() {
  return (
    <div className="border-b border-[#e8eafd] pb-12">
      <H2>Skills</H2>
      <div className="flex justify-start gap-4 flex-wrap mt-4 ">
        {skills.map((skill) => (
          <div className="py-2 px-4 rounded-lg bg-[#eef0ff] text-[#7981cb] font-medium">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
