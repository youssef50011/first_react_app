import React, { Component } from 'react'
import styles from "./About.module.css"
export default class About extends Component {
  render() {
    return (
      <>
      <div className={`${styles.bg} my-5`}>
      <h1 className="text-center ">About</h1>
      <div className="d-flex justify-content-center mt-4">
         <i className={`fa-solid fa-star text-danger fs-2 ${styles.star}`}></i>
         <div className={`${styles.right}`}></div>
         <div className={`${styles.left}`}></div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 text-center my-3">
                    <h3>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS.</h3>
                </div>
                <div className="col-md-4 col-sm-12 text-center my-3" >
                    <h3>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!.</h3>
                </div>
                <div className="col-md-4 col-sm-12 text-center my-3">
                    <h3>    If you’ve landed on this page, chances are you’re thinking about making the leap into freelancing. Welcome to the world of the solopreneur! Whether you’re driven by a dream
                    
                    </h3>
                </div>
            </div>
        </div>
      </div>

      </>
    )
  }
}
