import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isAuthenticated } = useSelector(({ user }) => user);
  return (
    <main className="container">
      <header class="d-flex justify-content-center py-3">
        (isAuthenticated ? (
        <>
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
        </>
        )
      </header>
    </main>
  );
};

export default Header;
