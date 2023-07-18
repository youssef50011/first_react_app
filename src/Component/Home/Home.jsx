import React, { Component } from 'react'
import styles from "./Home.module.css"
import imgg from "../../images/Happy-Boy-1.jpg"
export default class Home extends Component {
  render() {
    return (
      <>
      <div className={styles.bg}>
        <div >
          <div className="container">
            <div className={`row ${styles.divhome}`}>
              <div className={`col-md-4 col-sm-12`}>
              <img className={`rounded-circle w-100 mt-5`} src={imgg} alt=""  />

              </div>
            </div>
          </div>
        
        </div>
         <h1 className={`text-center m-3 text-light ${styles.heading}`}>START REACT</h1>
         <div className="d-flex justify-content-center">
         <i className={`fa-solid fa-star text-light fs-2 ${styles.star}`}></i>
         <div className={`${styles.right}`}></div>
         <div className={`${styles.left}`}></div>
        </div>
        <h3  className={`text-center m-4 text-light pb-5  ${styles.heading}`}>React JS - Web Designer - Node Js</h3>

      </div>

      </>
    )
  }
}
