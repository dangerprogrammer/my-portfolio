import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import Main from './pages/main/Main';
// import routesCore from './routesCore';
import {AboutMe, AboutMeDefault} from "./pages/about-me/AboutMe";
import {Skills, SkillsDefault} from "./pages/skills/Skills";
import {MyProjects, MyProjectsDefault} from "./pages/my-projects/MyProjects";

const routesCore = [
    {path: '/about-me', Element: AboutMe, DefaultElem: AboutMeDefault},
    {path: '/skills', Element: Skills, DefaultElem: SkillsDefault},
    {path: '/my-projects', Element: MyProjects, DefaultElem: MyProjectsDefault}
];

function RoutesDir() {
  return <Router>
    <Routes>
      <Route path="/" element={<Main/>} exact/>
      {routesCore.length && routesCore.map(({path, Element, exact = !1}, ind) => <Route key={ind} path={path} element={<><Link to="/">Voltar para Main</Link><Element/></>} exact={exact}/>)}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </Router>
};

export default RoutesDir;