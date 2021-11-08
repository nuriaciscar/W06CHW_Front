import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Header = () => {
  const { user } = useUser();

  return (
    <main className="container">
      <header className="d-flex justify-content-center py-3">
        {user.isAuthenticated ? (
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

            <NavLink to="/user/logout" exact className="nav-link active">
              {user.isAuthenticated ? "LOGOUT" : "LOGIN"}
            </NavLink>
          </>
        ) : (
          ""
        )}
      </header>
    </main>
  );
};

export default Header;
