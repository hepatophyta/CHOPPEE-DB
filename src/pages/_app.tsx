
import App from 'next/app'
import React from 'react'

import 'bootstrap/scss/bootstrap.scss'
import '../styles/home.css'
import '../styles/dashboard.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp