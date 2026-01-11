const Home = () => {
  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">TailAdmin</div>
        <ul className="menu">
          <li className="menu-item active">Dashboard</li>
           <li className="menu-item active">Login</li>
        
        </ul>
      </aside>

      {/* MAIN CONTENT — shifted slightly right */}
      <div className="main-content">

        <div className="topbar">
          <input className="search" placeholder="Search or type command..." />
          <div className="topbar-right">
            <span className="icon">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <div className="stat-title">Customers</div>
            <div className="stat-value">3,782</div>
            <div className="stat-up">+ 11.01%</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">5,359</div>
            <div className="stat-down">- 9.05%</div>
          </div>

          <div className="target-card">
            <div className="stat-title">Monthly Target</div>
            <div className="progress-circle">75.55%</div>
            <p>You earn $3287 today, it’s higher than last month.</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <h3>Monthly Sales</h3>
            <img
              className="chart-img"
              src="/mnt/data/96721085-12e6-4b00-ab30-c6e26195ca5c.png"
            />
          </div>

          <div className="chart-card">
            <div className="tabs">
              <div className="tab active">Monthly</div>
              <div className="tab">Quarterly</div>
              <div className="tab">Annually</div>
            </div>

            <img
              className="chart-img"
              src="/mnt/data/f3088b51-5e5d-44eb-8c0c-05a6ebaeb52d.jpg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
 export default Home;
