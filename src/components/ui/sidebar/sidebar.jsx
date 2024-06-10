import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import routes from "../../../router/routes";

import "./sidebar.css";

const Sidebar = () => {
  const { pathname } = useLocation;

  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {routes.map((item, index) => (
            <li key={index} className="sidebar__item">
              <NavLink
                to={item.path}
                className={item.path === pathname ? "active" : "sidebar__link"}
              >
                {item.content}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
