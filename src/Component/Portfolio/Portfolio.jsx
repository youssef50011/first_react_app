import React, { Component } from 'react'
import styles from "./Portfolio.module.css"
import im1 from "../../images/cabin.png"
import im2 from "../../images/cake.png"
import im3 from "../../images/circus.png"
import im4 from "../../images/game.png"
import im5 from "../../images/safe.png"
import im6 from "../../images/submarine.png"
export default class Portfolio extends Component {


  render() {
    return (
      <>
      <div className={styles.col}>
      <h1 className={`text-center text-dark ${styles.port}`}>Portfolio</h1>
      <div class="d-flex justify-content-center mt-4">
         <i className={`fa-solid fa-star text-danger fs-2 ${styles.star}`}></i>
         <div className={`${styles.right}`}></div>
         <div className={`${styles.left}`}></div>
        </div>
        <div className={`container`}>
            <div className="row">
            <div className={` col-md-4 my-3`} >
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im1}`} style={{width:"100%"}} alt="My Image" id='1'  />
                    </div>
                    <div className={styles.myhover}>
                        <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                    
                </div>
                    </div>
                </div>
                <div className={` col-md-4 my-3`} >
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im2}`} style={{width:"100%"}} alt="My Image" id='2' />

                    </div>
                    <div className={styles.myhover}>
                    <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                </div>
                    </div>
                </div>
                <div className={` col-md-4 my-3`}>
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im3}`} style={{width:"100%"}} alt="My Image" id='3' />

                    </div>
                    <div className={styles.myhover}>
                    <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className={` col-md-4 my-3`}>
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im4}`} style={{width:"100%"}} alt="My Image" id='4' />

                    </div>
                    <div className={styles.myhover}>
                    <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                </div>
                    </div>
                </div>
                <div className={` col-md-4 my-3`} >
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im5}`} style={{width:"100%"}} alt="My Image" id='5' />

                    </div>
                    <div className={styles.myhover}>
                    <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                </div>
                    </div>
                </div>
                <div className={` col-md-4 my-3`} >
                <div className={`${styles.img}`}>
                    <div className="">
                    <img src={`${im6}`} style={{width:"100%"}} alt="My Image" id='6' />

                    </div>
                    <div className={styles.myhover}>
                    <div className={styles.plus}>
                        <i className="fa-regular fa-plus"></i>
                        </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>

      </>
    )
  }
 
}
