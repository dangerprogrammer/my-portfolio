import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import Main from './pages/main/Main';
import routesCore from './routesCore';

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