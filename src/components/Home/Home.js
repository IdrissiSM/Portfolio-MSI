import React from "react";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Formation from "../Formation";
import Greeting from "./home-componenets/Greeting";

function Home() {
  return (
    <>
      <Greeting />
      <Skills />
      <Formation />
      <Projects />
    </>
  );
}

export default Home;
