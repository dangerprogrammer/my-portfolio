'use client';

import AboutMe from "@/components/about-me/AboutMe";
import MyProjects from "@/components/my-projects/MyProjects";
import MyProjects2 from "@/components/my-projects2/MyProjects";
import Page from "@/components/page/Page";
import Skills from "@/components/skills/Skills";
import Welcome from "@/components/welcome/Welcome";
import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { renderScrolling } from "@/scripts/initializePageTools";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";

function Home() {
  useEffect(() => {
    renderScrolling();
  }, []);

  return <>
    <MyProjects2/>
    <Page>
      <Welcome/>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
    </Page>
    <BackgroundCanvas/>
    <Sidebar/>
  </>
};

export default Home;