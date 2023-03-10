import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import "remixicon/fonts/remixicon.css";
import ViewCounter from "@/components/ViewCounter";

export default function Home() {
  return (
    <div className={"mt-16 flex  flex-col gap-14"}>
      <AboutMe />
      <Skills />
      <Projects />
      {/*It's count to visiters to home page but doesn't displaying on screen*/}
      <ViewCounter slug={"home-page"} blogPage={true} visible={false} />
    </div>
  );
}
