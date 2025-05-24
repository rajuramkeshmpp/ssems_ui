import { Link, Outlet } from "react-router-dom"; 
import '../../App.css';

const MainLayout = () => {
  return (
    <div className="main-container">
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo-placeholder" />
          <span className="brand">SS EMS</span>
        </div>

        <nav className="navbar-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="navbar-right">
          <Link to="/login" className="trial-button">Login</Link>
          <Link to="/register" className="trial-button">Register</Link>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">© 202 Main App</footer>
    </div>
  );
};

export default MainLayout;
