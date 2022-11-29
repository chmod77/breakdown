import React from 'react'
import { Navbar, Sidebar } from '../sections'

export default function RootPage({children}: any) {
  return (
    <div id="layout-wrapper">
            <Navbar />
            {/* ========== App Menu ========== */}
            <Sidebar />
            {/* Left Sidebar End */}
            {/* Vertical Overlay*/}
            <div className="vertical-overlay" />
            {/* ============================================================== */}
            {/* Start right Content here */}
            {/* ============================================================== */}
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                       {children}
                    </div>
                    {/* container-fluid */}
                </div>
                {/* End Page-content */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                © TheBreakDown App {new Date().getFullYear()}.
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
            {/* end main content*/}
        </div>
  )
}
