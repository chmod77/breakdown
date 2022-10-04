import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components'


export default function SignInAdminPage() {

  return (
    <div className="auth-page-wrapper">
      {/* auth page bg */}
      {/* <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
              <div className="bg-overlay" />
              <div className="shape">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                      <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                  </svg>
              </div>
          </div> */}
      {/* auth page content */}
      <div className="auth-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pb-5 mt-sm-5 mt-3 mb-4 text-white-50">
                <div>
                  <a href="/" className="d-inline-block auth-logo">
                    <img src="assets/images/tba-logo.png" alt="" height={50} />
                  </a>
                </div>

                {/* <p className="mt-3 fs-15 fw-semibold">The Breakdown App Admin Portal</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-sm-5 text-white-50">


                <h2 className="mt-3" style={{
                  color: "#000",
                  fontFamily: "Oswald"
                }}>Admin Log In</h2>
                <p style={{
                  color: "#000",
                  fontFamily: "Roboto"
                }}>
                  Sign In your Administrator or Super Administrator Account
                </p>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
            <div className=' text-center'>
                    <img src={"assets/images/user-vector.png"} height={65} />
                    <p className="fw-bold mt-3" style={{
                      fontFamily: "Roboto"

                    }}>Shalom Nyende</p>

                  </div>

                  <form action="index.html">
                      
                      <div className="mb-3">
                        <div className="float-end">
                          <a href="auth-pass-reset-basic.html" className="text-muted">Forgot password?</a>
                        </div>
                        <label className="form-label" htmlFor="password-input">Password</label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
                          <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link to={"/assign"} className="btn w-100" style={{
                          backgroundColor: "#721003",
                          color: "#fff"
                        }} type="button">SIGN IN</Link>
                      </div>

                    </form>
            
              {/* end card */}
              <div className="mt-4 text-center">
                <p className="mb-0">Don't have an Admin account ?
                </p>
                <p>
                  <Link to={"/root"} style={{
                    color: "#721003"
                  }} className="fw-bold text-decoration-underline"> Sign in to your ROOT USER ACCOUNT </Link>
                </p>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end auth page content */}
      {/* footer */}
      <Footer />
      {/* end Footer */}
    </div>

  )
}
