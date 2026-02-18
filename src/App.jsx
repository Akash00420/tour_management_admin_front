import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Hotels from "./pages/Hotels";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="hotels" element={<Hotels />} />

        </Route>



      </Routes>
    </Router>
  );
}

export default App;   // 👈 THIS LINE IS REQUIRED
