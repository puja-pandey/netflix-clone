import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="nav_logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            ></img>
          </a>
          <div className="navbar">
            <from className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={clickHandler}>
                Sign-in
              </button>
            </from>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
