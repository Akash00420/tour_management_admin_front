import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Hotels from "./pages/Hotels";

import "./assets/custom.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/hotels" element={<Hotels />} />

        {/* Optional: 404 */}
        {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
