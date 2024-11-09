"use client";
// import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
// import Project from "./components/Project";
import Contact from "./components/Contact";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Skills from "./components/Skills";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 700,
      delay: 50,
      mirror: true,
      anchorPlacement:"bottom-top",
      offset: 160
    });
    AOS.refresh();
  } , [])
  return (
  <div>
    <Hero />
    <About />
    <Skills />
    <Contact />
  </div>
  );
}
