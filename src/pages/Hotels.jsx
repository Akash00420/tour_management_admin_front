import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Hotels = () => {
  const location = useLocation();
  const active = location.pathname;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Midnight Safari</div>
        <ul className="menu">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li className={`menu-item ${active === "/" ? "active" : ""}`}>
              🏠 Dashboard
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none", color: "inherit" }}>
            <li className={`menu-item ${active === "/users" ? "active" : ""}`}>
              👤 Users
            </li>
          </Link>

          <Link to="/hotels" style={{ textDecoration: "none", color: "inherit" }}>
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

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <input className="search" placeholder="Search hotels..." />
          <div className="topbar-right">
            <span className="icon">🔔</span>
            <img src="https://i.pravatar.cc/40" className="avatar" />
          </div>
        </div>

        {/* Header */}
        <div className="hotel-header">
          <h1 className="page-title">Hotels</h1>
          <button className="add-hotel-btn" onClick={() => setShowModal(true)}>
            + Add Hotel
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-card">
              <div className="modal-header">
                <h2>Add Hotel</h2>
                <span className="close-btn" onClick={() => setShowModal(false)}>
                  ×
                </span>
              </div>

              <form className="hotel-form">
                <label>Hotel Name*</label>
                <input required />

                <label>Location*</label>
                <input required />

                <label>Price / Room*</label>
                <input required />

                <label>Total Rooms*</label>
                <input required />

                <label>Owner Name*</label>
                <input required />

                <label>Phone*</label>
                <input required />

                <button className="save-btn">Save</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
