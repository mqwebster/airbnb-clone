import logo from "../assets/airbnb-lockup-logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <img alt="Airbnb Logo" src={logo} className="navbar-logo" />
      </div>
    </div>
  );
}
