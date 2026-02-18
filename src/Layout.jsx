import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Midnight Safari</div>
        <ul className="menu">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className={`menu-item ${active === "/" ? "active" : ""}`}>
              🏠 Dashboard
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className={`menu-item ${active === "/users" ? "active" : ""}`}>
              👤 Users
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className={`menu-item ${active === "/hotels" ? "active" : ""}`}>
              🏨 Hotels
            </li>
          </Link>
          <li className="menu-item">🎫 Tour Package</li>
          <li className="menu-item">📅 Booking</li>
          <li className="menu-item">💰 Payments</li>
          <li className="menu-item">👨‍👩‍👧‍👦 Team</li>
          <li className="menu-item">⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content Area - This will render child routes */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
