import React from 'react'

export default function Welcome() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header align-items-center d-flex">
                        {/* <h4 className="card-title mb-0 flex-grow-1">Creator Verification Requests</h4> */}
                        <h2 className="mt-3" style={{
                            color: "#000",
                            fontFamily: "Oswald"
                        }}>Hi, Test User 1!</h2>

                    </div>{/* end card header */}
                    <div className="card-body">
                        <p>Welcome to The Breakdown App Admin Dashboard.</p>
                    </div>

                </div>{/* end card */}
            </div>
            {/* end col */}

            {/* end col */}
        </div>
    )
}
