'use client';

import AboutMe from "@/components/pages/about-me/AboutMe";
import MyProjects from "@/components/pages/my-projects/MyProjects";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Skills from "@/components/pages/skills/Skills";
import Welcome from "@/components/welcome/Welcome";
import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { renderPage } from "@/scripts/initializePageTools";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";

function Home() {
  useEffect(renderPage, []);
  
  return <>
    <Navbar/>
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