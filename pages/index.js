import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <div className={"mt-16 flex  flex-col gap-14"}>
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
