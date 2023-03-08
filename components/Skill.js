function Skill({ skill }) {
  return (
    <div
      key={skill}
      className="py-2 px-4 rounded-lg bg-[#eef0ff] dark:bg-[#d3d8fb] text-[#484f8f] font-medium"
    >
      {skill}
    </div>
  );
}

export default Skill;
