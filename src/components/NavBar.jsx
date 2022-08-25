import { NavLink,Link } from "react-router-dom";
import WidgetCart from "./WidgetCart";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
            <Logo/>
            Comiendo Pasto
         </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/verdura"}
              >
                Verdura
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/hortaliza"}
              >
                Hortaliza
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/otro"}
              >
                Otro
              </NavLink>
            </div>
          </div>
          <WidgetCart />
        </div>
      </nav>
    </>
  );
};

export default NavBar;