import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <div className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 my-2">
              <h3 className="text-light text-center">LOCATION</h3>
              <h4 className="text-light text-center">Qina , Dishna , Egypt</h4>
          </div>
          <div className="col-md-4 col-sm-12 my-2">
          <h3 className="text-light text-center ">Our Social Media</h3>
            <div className="social d-flex justify-content-between">
              <i style={{cursor:"pointer"}} className='fab fa-facebook d-block fs-2 cursor-pointer'></i>
              <i style={{cursor:"pointer"}} className='fab fa-twitter d-block fs-2'></i>
              <i style={{cursor:"pointer"}} className='fab fa-linkedin d-block fs-2'></i>
              <i style={{cursor:"pointer"}} className='fab fa-instagram d-block fs-2'></i>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 my-2">
            <div className="text-center">
              <h4>ABOUT FREELANCER Freelance is a free to use, MIT licensed Bootstrap theme created by Route</h4>
            </div>
          </div>
          <div className="text-center my-2">
            <h4> &copy;Youssef Dardeer Mousa</h4>
          </div>
        </div>
      </div>

      </div>
      
      </>
    )
  }
}
