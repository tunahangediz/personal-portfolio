function Skill({ skill }) {
  return (
    <div
      key={skill}
      className="py-2 px-4 rounded-md bg-[#eef0ff] dark:bg-white  text-[#484f8f] "
    >
      {skill}
    </div>
  );
}

export default Skill;
