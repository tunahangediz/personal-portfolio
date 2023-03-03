import H1 from "@/UI/H1";

function Navbar() {
  return (
    <header className=" w-full flex justify-between sm:mt-16 mt-6">
      <div className="flex gap-6 items-center">
        {/* Profile */}
        {/* <div className=" w-14 h-14 bg-red-600"></div> */}
        <div>
          <H1>Tunahan Gediz</H1>
          <h2 className="text-[#888888]">Frontend Developer</h2>
        </div>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>Blog</li>
          <li>Light/Dark Theme</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
