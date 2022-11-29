import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Sidebar() {
    const location = useLocation();

    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);


    return (
        <div className="app-menu navbar-menu" style={{
            marginTop: 20
        }}>
            {/* LOGO */}
            <div className="navbar-brand-box">
                {/* Dark Logo*/}
                <a href="/" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="assets/images/tba-logo.png" alt="" height={35} />
                    </span>
                    <span className="logo-lg" style={{
                        marginTop: 35
                    }}>
                        <img src="assets/images/tba-logo.png" alt="" height={55} />
                    </span>
                </a>
                {/* Light Logo*/}
                <a href="/" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="assets/images/tba-logo.png" alt="" height={35} />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/tba-logo.png" alt="" height={35} />
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line" />
                </button>
            </div>
            <hr></hr>
            <div id="scrollbar">
                <div className="container-fluid">
                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu" style={{
                            color: "#721003",
                            fontSize: 16,
                            fontFamily: "Roboto"
                        }}>
                            <img src='assets/images/finish.png' style={{
                                height: 20,
                                width: 20, marginRight: 10
                            }} />Reports and Requests</span></li>
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/creator-verification' ? 'active' : ''}`} to={"/creator-verification"} role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                <i data-feather="home" className="icon-dual" /> <span data-key="t-dashboards" style={{
                                    fontFamily: "Roboto"
                                }}>Creator Verification Requests</span>
                            </Link>
                            {/* <div className="collapse menu-dropdown" id="sidebarDashboards">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <a href="dashboard-analytics.html" className="nav-link" data-key="t-analytics"> Analytics </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="dashboard-crm.html" className="nav-link" data-key="t-crm"> CRM </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index.html" className="nav-link" data-key="t-ecommerce"> Ecommerce </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="dashboard-crypto.html" className="nav-link" data-key="t-crypto"> Crypto </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="dashboard-projects.html" className="nav-link" data-key="t-projects"> Projects </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="dashboard-nft.html" className="nav-link" data-key="t-nft"> NFT</a>
                                    </li>
                                </ul>
                            </div> */}
                        </li> {/* end Dashboard Menu */}
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/official-verification' ? 'active' : ''}`} to={"/official-verification"} role="button" aria-expanded="false" aria-controls="sidebarApps">
                                <i data-feather="grid" className="icon-dual" /> <span data-key="t-apps" style={{
                                    fontFamily: "Roboto"
                                }}>“Official” Stamp Requests</span>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/flagged-content' ? 'active' : ''}`} to={"/flagged-content"} role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                <i data-feather="layout" className="icon-dual" /> <span data-key="t-layouts" style={{
                                    fontFamily: "Roboto"
                                }}>Flagged Content</span>
                            </Link>

                        </li> {/* end Dashboard Menu */}
                        <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-pages" style={{
                            color: "#721003",
                            fontSize: 16,
                            fontFamily: "Roboto"
                        }}>
                            <img src='assets/images/admin_settings.png' style={{
                                height: 20,
                                width: 20, marginRight: 10
                            }} />Admin Panel Settings</span></li>
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/admin-roles' ? 'active' : ''}`} to={"/admin-roles"} role="button" aria-expanded="false" aria-controls="sidebarAuth">
                                <i data-feather="users" className="icon-dual" /> <span data-key="t-authentication" style={{
                                    fontFamily: "Roboto"
                                }}>Administrators & Roles</span>
                            </Link>

                        </li>


                        <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-components" style={{
                            color: "#721003",
                            fontSize: 16,
                            fontFamily: "Roboto"
                        }}>
                            <img src='assets/images/app_data.png' style={{
                                height: 20,
                                width: 20, marginRight: 10
                            }} />
                            App Data</span></li>
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/users' ? 'active' : ''}`} to={"/users"} role="button" aria-expanded="false" aria-controls="sidebarUI">
                                <i data-feather="package" className="icon-dual" /> <span data-key="t-base-ui" style={{
                                    fontFamily: "Roboto"
                                }}>Users</span>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link menu-link ${location.pathname == '/data-export' ? 'active' : ''}`} to={"/data-export"} role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI">
                                <i data-feather="layers" className="icon-dual" /> <span data-key="t-advance-ui" style={{
                                    fontFamily: "Roboto"
                                }}>Data Export</span>
                            </Link>

                        </li>

                    </ul>
                </div>
                {/* Sidebar */}
            </div>
            <div className="sidebar-background" />
        </div>

    )
}
