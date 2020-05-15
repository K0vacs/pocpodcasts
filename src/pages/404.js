import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"

// This page renders the 404 page
export default function FourZeroFour() {
    return (
      <section className="full-view d-flex flex-column justify-content-between">
            <Nav />
            <main className="container">
                <div className="row">
                    <div className="col-12 text-white text-center">
                        <h1>Page not found!</h1>
                    </div>
                </div>
            </main>
            <Footer />
      </section>
    )
}