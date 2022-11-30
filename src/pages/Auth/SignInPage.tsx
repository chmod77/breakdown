import React, { useState } from 'react'
import { Footer, openNotificationWithIcon } from '../../components'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { signIn } from '../../services/rest';
import { Spin } from 'antd';

//@ts-ignore
import { Helmet } from "react-helmet";
import { AuthContext } from '../../context/AuthContext';

export default function SignInPage() {

    const {user, setUser,setIsAuthenticating, userHasAuthenticated }:any = React.useContext(AuthContext)

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [signingIn, setSigningIn] = useState(false)

    const history = useHistory();

    const onSignIn = async () => {
        setSigningIn(true)
        let params = {
            username: username,
            password: password
        }
        let signinData = await signIn({ params })
        let response = await signinData
        setSigningIn(false)

        if (response.success === true && response.data.is_admin === true) {
            openNotificationWithIcon('success', 'Success', 'You have successfully signed in!')
            console.log(response)
            setUser(response.data)
            userHasAuthenticated(true)
            setIsAuthenticating(false)
            history.push('/dash')
        }
        else if (response.success === true && response.data.is_admin === false) {
            setUser(null)
            userHasAuthenticated(false)
            setIsAuthenticating(false)
            openNotificationWithIcon('error', 'Error', 'Only root users allowed.')
        }
        else {
            setUser(null)
            userHasAuthenticated(false)
            setIsAuthenticating(false)
            openNotificationWithIcon('error', 'Error', response?.message)
        }
    }

    return (
        <React.Fragment>

            <Helmet>
            <script src="assets/js/pages/password-addon.init.js" async ></script>

            </Helmet>
            <div className="auth-page-wrapper pt-5">
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
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <a href="index.html" className="d-inline-block auth-logo">
                                            <img src="assets/images/tba-logo.png" alt="" height={50} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end row */}
                        <Spin spinning={signingIn}>
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6 col-xl-5">
                                    <div className="card mt-4">
                                        <div className="card-body p-4">
                                            <div className="text-center mt-2">
                                                <p className="text-muted" style={{
                                                    fontFamily: "Roboto"
                                                }}>Sign in to your Administrator or Super-Administrator User Account.</p>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <form action="">
                                                    <div className="mb-3">
                                                        <label htmlFor="username" className="form-label" style={{
                                                            fontFamily: "Roboto"
                                                        }}>Username</label>
                                                        <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e) => {
                                                            setUsername(e.target.value)
                                                        }}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="float-end">
                                                            <a href="auth-pass-reset-basic.html" className="text-muted">Forgot password?</a>
                                                        </div>
                                                        <label className="form-label" htmlFor="password-input" style={{
                                                            fontFamily: "Roboto"
                                                        }}>Password</label>
                                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                                            <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" onChange={(e) => setPassword(e.target.value)} />
                                                            <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle" /></button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <button className="btn w-100" style={{
                                                            backgroundColor: "#721003",
                                                            color: "#fff",
                                                            fontFamily: "Roboto"
                                                        }} type="button" onClick={onSignIn}>SIGN IN</button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        {/* end card body */}
                                    </div>
                                    {/* end card */}
                                    <div className="mt-4 text-center">
                                        <p className="mb-0" style={{
                                            fontFamily: "Roboto"
                                        }}>Don't have an Admin account ?
                                        </p>
                                        <p>
                                            <Link to={"/root"} style={{
                                                color: "#721003",
                                                fontFamily: "Roboto"
                                            }} className="fw-bold text-decoration-underline"> Sign in to your ROOT USER ACCOUNT </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Spin>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end auth page content */}
                {/* footer */}
                <Footer />
                {/* end Footer */}
            </div>

        </React.Fragment>

    )
}
