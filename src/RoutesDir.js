import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import Main from './pages/main/Main';
import RoutesCore from './RoutesCore';

function RoutesDir() {
  return <Router>
    <Routes>
      <Route path="/" element={<Main/>} exact/>
      {RoutesCore.length && RoutesCore.map(({path, Element, exact = !1}, ind) => <Route key={ind} path={path} element={<><Link to="/">Voltar para Main</Link><Element/></>} exact={exact}/>)}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </Router>
};

export default RoutesDir;