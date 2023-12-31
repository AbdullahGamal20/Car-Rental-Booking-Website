import React from 'react'
import Header from "../Header/Header"
import Footer from "../footer/Footer"
import Routers from "../../routers/Routers"


function Layout() {
  return (
    <>
    <Header />
    <div>
      <Routers />
    </div>
    <Footer />
    </>
  )
}

export default Layout