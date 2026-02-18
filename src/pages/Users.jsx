import { Link, useLocation } from "react-router-dom";

const Users = () => {
  const location = useLocation();

  // Static user data
  const users = [
    {
      id: 1,
      name: "Amit Sharma",
      initials: "AS",
      phone: "+91 98765 43210",
      location: "Delhi",
      package: "Manali Explorer Package",
      amount: "₹45,000",
      avatar: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Neha Verma",
      initials: "NV",
      phone: "+91 91234 56789",
      location: "Mumbai",
      package: "Spiti Valley Adventure",
      amount: "₹78,000",
      avatar: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 3,
      name: "Rahul Mehta",
      initials: "RM",
      phone: "+91 99887 66554",
      location: "Ahmedabad",
      package: "Kashmir Winter Getaway",
      amount: "₹62,500",
      avatar: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 4,
      name: "Priya Singh",
      initials: "PS",
      phone: "+91 90123 45678",
      location: "Lucknow",
      package: "Uttrakhand Honeymoon Package",
      amount: "₹55,000",
      avatar: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      id: 5,
      name: "Kunal Patel",
      initials: "KP",
      phone: "+91 88990 11223",
      location: "Surat",
      package: "Rajasthan Heritage Tour",
      amount: "₹39,000",
      avatar: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      id: 6,
      name: "Sneha Gupta",
      initials: "SG",
      phone: "+91 87654 32109",
      location: "Bangalore",
      package: "Kerala Backwater Cruise",
      amount: "₹48,500",
      avatar: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      id: 7,
      name: "Vikram Rao",
      initials: "VR",
      phone: "+91 98123 45670",
      location: "Hyderabad",
      package: "Goa Beach Paradise",
      amount: "₹42,000",
      avatar: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
      id: 8,
      name: "Anjali Desai",
      initials: "AD",
      phone: "+91 91234 67890",
      location: "Pune",
      package: "Ladakh Bike Expedition",
      amount: "₹85,000",
      avatar: "linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)"
    }
  ];

  return (
    <div>


      <div className="main-content">
        <div className="topbar">
          <h1 className="page-title">Users</h1>
        </div>

        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-card-left">
                <div className="user-avatar-wrapper">
                  <div className="user-avatar" style={{ background: user.avatar }}>
                    {user.initials}
                  </div>
                  <div className="user-badge">{user.id}</div>
                </div>
                <div className="user-info">
                  <h3 className="user-name">{user.name}</h3>
                  <div className="user-detail">
                    <span>📞</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="user-detail">
                    <span>📍</span>
                    <span>{user.location}</span>
                  </div>
                  <div className="user-detail">
                    <span>🎫</span>
                    <span>{user.package}</span>
                  </div>
                </div>
              </div>
              <div className="user-card-right">
                <div className="user-amount">{user.amount}</div>
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
