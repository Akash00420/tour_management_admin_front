import './assets/custom.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
