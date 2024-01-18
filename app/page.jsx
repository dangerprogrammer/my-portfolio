'use client';

import AboutMe from "@/components/pages/about-me/AboutMe";
import MyProjects from "@/components/pages/my-projects/MyProjects";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Skills from "@/components/pages/skills/Skills";
import Welcome from "@/components/welcome/Welcome";
import BackgroundCanvas from "@/components/background-canvas/BackgroundCanvas";
import { renderPage } from "@/scripts/initializePageTools";
import { useContext, useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { ContextApp } from "@/components/context/ContextApp";
import { usePathname } from "next/navigation";

function Home() {
  const pathname = usePathname(),
    { ...contexts } = useContext(ContextApp),
    { history, setHistory } = contexts;
  useEffect(renderPage, []);

  if (!history.length) setHistory(oldHistory => [...oldHistory, pathname]);
  
  return <>
    <Navbar/>
    <Page>
      <Welcome/>
      <AboutMe { ...contexts }/>
      <Skills { ...contexts }/>
      <MyProjects { ...contexts }/>
    </Page>
    <BackgroundCanvas/>
    <Sidebar/>
  </>
};

export default Home;