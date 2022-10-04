import React, { useState } from 'react'
import { Footer } from '../../components'
import { Link } from 'react-router-dom'
import SectionMessage from '@atlaskit/section-message';


export default function AssignSuperAdminPage() {
    const [found, setFound] = useState<boolean | null>(null)
    const onHandleSearch = (e: any) => {
        if (e === "shalom") {
            setFound(true)
        }
        else if (e === "shalomze") {
            setFound(false)
        }
        else {
            setFound(null)
        }
    }
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
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="text-center mt-sm-5 text-white-50">
                                <h2 className="mt-3" style={{
                                    color: "#000",
                                    fontFamily: "Oswald"
                                }}>Assign Super Admin</h2>
                                <p style={{
                                    color: "#000",
                                    fontFamily: "Roboto"
                                }}>
                                    Search and assign a Super Administrator from The Breakdown App user accounts
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="p-2 mt-4 ">
                                <form action="index.html">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="username" placeholder="Search by username" onChange={(e) => {
                                            console.log(e.target.value)
                                            onHandleSearch(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mt-4">
                                        {
                                            found === true && (
                                                <div className='pb-1 text-center'>
                                                    <img src={"assets/images/user-vector.png"} height={50} />
                                                    <p className="fw-bold pt-1" style={{
                                                        fontFamily: "Roboto"

                                                    }}>Shalom Nyende</p>
                                                    <div className="mb-2">
                                                        <Link to={"/signin-admin"} className="btn w-50 btn-sm " style={{
                                                            backgroundColor: "#721003",
                                                            color: "#fff",
                                                            fontFamily: "Roboto"
                                                        }} type="button">ASSIGN IN AS SHALOM</Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {found === false && (
                                            <SectionMessage
                                                title="No Result Found"
                                                appearance="error"
                                            >
                                                <p>No Users found with username `shalomze`</p>
                                            </SectionMessage>
                                        )}
                                       
                                    </div>
                                    <div className='text-center mt-4'>
                                    <p>
                                            <Link to="/" style={{
                                                color: "#721003",
                                                fontFamily: "Roboto"

                                            }} className="fw-bold text-decoration-underline text-center"> LOGOUT ROOT USER</Link>
                                        </p>
                                    </div>
                                </form>


                            </div>
                            {/* end card */}
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
