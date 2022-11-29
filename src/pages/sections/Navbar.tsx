import React from 'react'

export default function Navbar() {
  return (
    <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        {/* Left Navbad */}
                        <div className="d-flex">
                            {/* LOGO */}

                            {/* <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                                <span className="hamburger-icon">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </button> */}
                            {/* App Search*/}
                            <span>Version 0.0.1</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="dropdown d-md-none topbar-head-dropdown header-item">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bx bx-search fs-22" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="dropdown ms-sm-3 header-item topbar-user">
                                <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d-flex align-items-center">
                                        <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                        <span className="text-start ms-xl-2">
                                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Root User</span>
                                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Admin</span>
                                        </span>
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    {/* item*/}
                                    <h6 className="dropdown-header">Welcome Anna!</h6>
                                    <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" /> <span className="align-middle">Profile</span></a>
                                    <a className="dropdown-item" href="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" /> <span className="align-middle">Messages</span></a>
                                    <a className="dropdown-item" href="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" /> <span className="align-middle">Taskboard</span></a>
                                    <a className="dropdown-item" href="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" /> <span className="align-middle">Help</span></a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="pages-profile.html"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" /> <span className="align-middle">Balance : <b>$5971.67</b></span></a>
                                    <a className="dropdown-item" href="pages-profile-settings.html"><span className="badge bg-soft-success text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" /> <span className="align-middle">Settings</span></a>
                                    <a className="dropdown-item" href="auth-lockscreen-basic.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1" /> <span className="align-middle">Lock screen</span></a>
                                    <a className="dropdown-item" href="auth-logout-basic.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1" /> <span className="align-middle" data-key="t-logout">Logout</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </header>
  )
}
