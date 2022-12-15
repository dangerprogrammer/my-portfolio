import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Main from './pages/main/Main';
import RoutesCore from './RoutesCore';
import RoutesMap from './RoutesMap';

function RoutesDir() {
  return <Router>
    <Routes>
      <Route path="/" element={<Main/>} exact/>
      {RoutesCore.length && RoutesCore.map(RoutesMap)}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </Router>
};

export default RoutesDir;