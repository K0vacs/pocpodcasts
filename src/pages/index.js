import React, { Component } from "react"
import Nav from "../components/nav"
import DesktopHeader from "../components/desktop-header"
import MobileHeader from "../components/mobile-header"
import Footer from "../components/footer"
import withSizes from 'react-sizes'

// This page is the entrypoint/base or homepage for the application
class MyComponent extends Component {
  render() {
    return (
      <section className="full-view">
          <Nav />
          {this.props.isMobile ? <MobileHeader />: <DesktopHeader />}
          <Footer />
      </section>
    )
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 576,
})

export default withSizes(mapSizesToProps)(MyComponent)