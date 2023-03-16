import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from '../router/Router'

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default Layout