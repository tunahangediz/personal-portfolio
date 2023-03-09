import H2 from "@/UI/H2";
import ViewCounter from "./ViewCounter";

function AboutMe() {
  return (
    <>
      <div className="border-b border-[#e8eafd] dark:border-[#3c448a] pb-12">
        <H2>About me</H2>
        <p className="text-gray-800 text-lg dark:text-gray-400">
          Hello! I am a frontend developer and passionate about web
          technologies. I develop user friendly, aesthetic and functional web
          pages using technologies such as HTML, CSS and JavaScript.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
