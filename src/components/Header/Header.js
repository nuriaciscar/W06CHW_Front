import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <main className="main">
      <section>
        <NavLink to="/robots" exact>
          HOME
        </NavLink>
        <NavLink to="/robots/create" exact>
          CREATE ROBOT
        </NavLink>
      </section>
    </main>
  );
};

export default Header;
