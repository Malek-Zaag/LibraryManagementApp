import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      className="d-flex justify-content-between bg-dark flex-row p-3 fw-semibold"
      style={{}}
    >
      <div className="text-primary d-flex">
        <Link to="/">
          <img alt="logo" />
        </Link>
        <Link to="/library" className="mx-3">
          Library
        </Link>
        <div className="mx-3">About Us</div>
      </div>
      <div className="text-secondary">Second Element</div>
    </div>
  );
};
