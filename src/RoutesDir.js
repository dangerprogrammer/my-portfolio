import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Main from './pages/main/Main';
import RoutesCore from './RoutesCore';

function RoutesDir() {
  return <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
      {RoutesCore.length && RoutesCore.map(({path, Element, exact = !1}, ind) => <Route key={ind} path={path} element={<Element/>} exact={exact}/>)}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </Router>
};

export default RoutesDir;