import React from "react"
import logo from "../static/images/poc-podcasts-logo.svg"
import menu from "../static/images/menu-icon.svg"

// This component renders the navigation section
export default function Nav() {

  return (
    <div className="container">
      <div className="row">

        <nav className="col navbar navbar-expand-lg justify-content-between">
              <a className="nav-with-img" href="/">
                  <img src={logo} alt="Logo" />
              </a>
              <a href="/">
                  <span className="d-none d-md-inline text-white pr-3 font-weight-bold">MENU</span> 
                  <img src={menu} alt="Burger Menu" />
              </a>
        </nav>
          
      </div>
    </div>
  )

}