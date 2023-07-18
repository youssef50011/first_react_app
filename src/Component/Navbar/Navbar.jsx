import React, { Component } from 'react'
import styles from "./Navbar.module.css"
export default class Navbar extends Component {
  render() {
    return (
      <>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a className={`navbar-brand px-3 ${styles.links}`}  href="#">Start React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className={`nav-item ${styles.links}`}>
          <a className="nav-link fs-4 px-3"  aria-current="page" href="#">Portfolio</a>
        </li>
        <li  className={`nav-item ${styles.links}`}>
          <a className="nav-link fs-4 px-3" href="#">About</a>
        </li>
        <li className={`nav-item ${styles.links}`}>
          <a className="nav-link fs-4 px-3" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
    )
  }
}
