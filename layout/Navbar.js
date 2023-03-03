import { moon, sun } from "@/data/themeSvg";
import Button from "@/UI/Button";
import H1 from "@/UI/H1";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const renderThemeChanger = () => {
    return theme == "dark" ? (
      <Button onClick={changeTheme}>{moon}</Button>
    ) : (
      <Button onClick={changeTheme}>{sun}</Button>
    );
  };
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
          <li>{renderThemeChanger()}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
