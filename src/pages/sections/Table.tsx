import React from 'react'

export default function Table({children, title}: any) {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header align-items-center d-flex">
                        {/* <h4 className="card-title mb-0 flex-grow-1">Creator Verification Requests</h4> */}
                        <h2 className="mt-3" style={{
                            color: "#000",
                            fontFamily: "Oswald"
                        }}>{title}</h2>

                    </div>{/* end card header */}
                    <div className="card-body">
                        {/* <p className="text-muted">Use <code>table</code> class to show bootstrap-based default table.</p> */}
                        <div className="live-preview">
                            <div className="table-responsive">
                                {children}
                            </div>
                        </div>
                       
                    </div>{/* end card-body */}
                </div>{/* end card */}
            </div>
            {/* end col */}

            {/* end col */}
        </div>
    )
}
