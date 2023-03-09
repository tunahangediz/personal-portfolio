import { moon, sun } from "@/data/themeSvg";
import Button from "@/UI/Button";
import H1 from "@/UI/H1";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    return theme == "light" ? (
      <Button onClick={changeTheme}>
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        }
      </Button>
    ) : (
      <Button onClick={changeTheme}>
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="red"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        }
      </Button>
    );
  };
  return (
    <header className=" w-full flex justify-between sm:mt-16 mt-6 ">
      <div className="flex gap-6 items-center">
        {/* Profile */}
        {/* <div className=" w-14 h-14 bg-red-600"></div> */}
        <Link href="/">
          <H1 className="right-1">Tunahan Gediz</H1>
          <h2 className="text-[#888888]">Frontend Developer</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="">
            <Link href="/blog">
              <p className="text-shadow dark:hover:text-[#6a7bfd]">Blog</p>
            </Link>
          </li>
          <li>{renderThemeChanger()}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
