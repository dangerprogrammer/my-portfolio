import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import RoutesCore from './RoutesCore';
import RoutesMap from './RoutesMap';

function RoutesDir() {
  return <Router>
    <Routes>
      {RoutesCore.length > 0 && RoutesCore.map(RoutesMap)}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  </Router>
};

export default RoutesDir;