import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-full">
        <header className="Header" id="Header">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <a className="navbar-brand" href="/">
              <img src={require('../assets/images/logoblack.png')} alt="Brand" className="" width="140"/>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Enquiry
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Working
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <span className="button">Shop Now </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
export default Header;
