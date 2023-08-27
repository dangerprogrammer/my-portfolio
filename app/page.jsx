import AboutMe from "@/components/about-me/AboutMe";
import MyProjects from "@/components/my-projects/MyProjects";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Skills from "@/components/skills/Skills";
import Welcome from "@/components/welcome/Welcome";

function Home() {
  return <>
    <Navbar/>
    <Page>
      <Welcome/>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
    </Page>
  </>
};

export default Home;