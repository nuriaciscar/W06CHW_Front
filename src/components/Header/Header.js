import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <main className="container">
      <header class="d-flex justify-content-center py-3">
        <NavLink to="/" exact className="nav-link active">
          HOME
        </NavLink>
        <NavLink
          to="/robots/create"
          exact
          className="nav-link "
          aria-current="page"
        >
          CREATE ROBOT
        </NavLink>
      </header>
    </main>
  );
};

export default Header;
