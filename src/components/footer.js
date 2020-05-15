import React from "react"
import icon from "../static/images/poc-icon.svg"
import tw from "../static/images/tw.svg"
import fb from "../static/images/fb.svg"
import ig from "../static/images/ig.svg"

// This component renders the footer section
export default function Footer() {

  return (
    <footer className="container">
        <section className="row">

            <nav className="col navbar justify-content-between">

                <div className="footer-brand" href="/">
                    <img className="d-none d-md-inline" src={icon} alt="Logo" />
                    <span className="text-white pl-md-2 font-weight-bold">PEOPLE OF COLOUR.</span>
                </div>

                <a href="/">
                    <img className="d-none d-md-inline mr-3" src={tw} alt="Logo" />
                    <img className="d-none d-md-inline mr-3" src={fb} alt="Logo" />
                    <img className="d-none d-md-inline" src={ig} alt="Logo" />
                    <span className="d-md-none text-white font-weight-bold mr-3">Tw</span>
                    <span className="d-md-none text-white font-weight-bold mr-3">Fb</span>
                    <span className="d-md-none text-white font-weight-bold">Ig</span>
                </a>
                
            </nav>

        </section>
    </footer>
  )

}