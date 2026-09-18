import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand" aria-label="Roamly home">
  <svg
    className="brand-icon"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <circle
      cx="24"
      cy="24"
      r="20"
      fill="#E8FFF9"
      stroke="#00A896"
      strokeWidth="2.5"
    />

    <path
      d="M24 7L29 24L24 41L19 24L24 7Z"
      fill="#00A896"
    />

    <path
      d="M7 24L24 19L41 24L24 29L7 24Z"
      fill="#02C39A"
    />

    <circle
      cx="24"
      cy="24"
      r="4"
      fill="#FFB703"
    />
  </svg>

  <span className="brand-name">Roamly</span>
</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/my-trips">My Trips</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;