import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
export const Navbar = () => {
  return (
    <div
      className="align-items-center bg-light d-flex justify-content-between fs-4 flex-row fw-semibold"
      style={{}}
    >
      <div className="text-primary d-flex align-items-center">
        <Link to="/">
          <img src={logo} alt="logo" height="80" width="80" />
        </Link>
        <Link to="/library" className="mx-3" style={{ textDecoration: "none" }}>
          Library
        </Link>
        <Link to="/" className="mx-3" style={{ textDecoration: "none" }}>
          About Us
        </Link>
      </div>
      <div className="text-secondary p-2">
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Signup/Login
        </Link>
      </div>
    </div>
  );
};
