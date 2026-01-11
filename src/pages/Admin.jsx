import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Later add admin authentication here
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="container">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="left-content">
            <div className="logo">*</div>
            <h1>Hello<br />SaleSkip! 👋</h1>
            <p>
              Skip repetitive and manual sales–marketing tasks.
              Get highly productive through automation and save tons of time!
            </p>
            <span className="copyright">
              © 2022 SaleSkip. All rights reserved.
            </span>
          </div>
        </div>

        {/* RIGHT LOGIN PANEL */}
        <div className="right-panel">
          <div className="right-content">
            <h2 className="brand">SaleSkip</h2>
            <h3 className="welcome">Welcome Back!</h3>

            <p className="sub-text">
              Don’t have an account?{" "}
              <a href="#" className="link">Create a new account now</a>
            </p>

            <form className="form" onSubmit={handleAdminLogin}>
              <input
                type="email"
                placeholder="Email"
                className="input"
              />

              <input
                type="password"
                placeholder="Password"
                className="input"
              />

              <button type="submit" className="login-btn">
                Login Now
              </button>

              <button type="button" className="google-btn">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="google"
                />
                Login with Google
              </button>

              <p className="forgot">
                Forget password? <a href="#" className="link">Click here</a>
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;
