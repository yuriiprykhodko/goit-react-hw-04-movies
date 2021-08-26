import { NavLink } from "react-router-dom";
import  "./Navigation.css";
const Navigation = () => (
  <nav>
    <ul className="list">
      <li>
        <NavLink
          exact
          to="/"
          className="link"
          activeClassName="activeLink"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="link"
          activeClassName="activeLink"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;
