import React, { Component } from 'react'
import styles from "./Contact.module.css"
export default class Contact extends Component {
  render() {
    return (
      <>
      <div className={`mt-3 ${styles.bg}`}>
      <h1 className="text-center ">Contact US</h1>
      <div className="d-flex justify-content-center mt-4">
         <i className={`fa-solid fa-star text-danger fs-2 ${styles.star}`}></i>
         <div className={`${styles.right}`}></div>
         <div className={`${styles.left}`}></div>
        </div>
        <div className="w-75 m-auto">
  <form>
  <div className="my-3 text-center">
    <label htmlFor="exampleInputEmail1" className={`form-label`}>Email address :</label>
    <input type="email" placeholder='Enter your E-mail' className={`form-control text-center ${styles.centered_placeholder}`}  id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 text-center">
    <label htmlFor="exampleInputPassword1" className="form-label">Name :</label>
    <input placeholder='Enter your Name' type="text" className={`form-control text-center ${styles.centered_placeholder}`}  id="exampleInputPassword1" />
  </div>
  <div className="mb-3 text-center">
    <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
    <input placeholder='Enter your Password' type="password" className={`form-control text-center ${styles.centered_placeholder}`} id="exampleInputPassword1" />
  </div>
  <div className="w-100 d-flex  justify-content-center py-5">
  <button type="submit" className="btn btn-primary">Submit</button>

  </div>
</form>

        </div>
      </div>
      
      </>
    )
  }
}
