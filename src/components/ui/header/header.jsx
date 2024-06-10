import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to={"!#"} className="heade__logo">
          Logo
        </NavLink>
        <div className="admin-wrapper"><i className="fa-solid fa-user"></i></div>
      </nav>
    </header>
  );
};

export default Header;
