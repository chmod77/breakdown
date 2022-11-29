import React from 'react'

export default function Table({title}: any) {
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
                                <table className="table align-middle table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{
                                                fontFamily: "Roboto"
                                            }}>User</th>
                                            <th scope="col" style={{
                                                fontFamily: "Roboto"
                                            }}>Tier Type</th>
                                            <th scope="col" style={{
                                                fontFamily: "Roboto"
                                            }}>Category Affiliations</th>
                                            <th scope="col" style={{
                                                fontFamily: "Roboto"
                                            }}>Date</th>
                                            <th scope="col" style={{
                                                fontFamily: "Roboto"
                                            }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><a href="#" className="fw-medium"><img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" style={{
                                                marginRight: 5
                                            }} />Bobby Davis</a></th>
                                            <td><span className="badge badge-lg badge-pill bg-warning" style={{
                                                fontSize: 14,
                                                borderRadius: 20,
                                                color: "#000"
                                            }} data-key="t-new">Tier 2</span></td>
                                            <td>TV</td>
                                            <td>Fri, November 25 2022</td>
                                            <td><a href="javascript:void(0);" className="link-success">View More <i className="ri-eye-line align-middle" /></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><a href="#" className="fw-medium"><img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" style={{
                                                marginRight: 5
                                            }} />Bobby Davis</a></th>
                                            <td><span className="badge badge-lg badge-pill bg-warning" style={{
                                                fontSize: 14,
                                                borderRadius: 20,
                                                color: "#000"
                                            }} data-key="t-new">Tier 2</span></td>                                            <td>TV</td>
                                            <td>Fri, November 25 2022</td>
                                            <td><a href="javascript:void(0);" className="link-success">View More <i className="ri-eye-line align-middle" /></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><a href="#" className="fw-medium"><img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" style={{
                                                marginRight: 5
                                            }} />Bobby Davis</a></th>
                                            <td><span className="badge badge-lg badge-pill bg-warning" style={{
                                                fontSize: 14,
                                                borderRadius: 20,
                                                color: "#000"
                                            }} data-key="t-new">Tier 2</span></td>
                                            <td>TV</td>
                                            <td>Fri, November 25 2022</td>
                                            <td><a href="javascript:void(0);" className="link-success">View More <i className="ri-eye-line align-middle" /></a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><a href="#" className="fw-medium">
                                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" style={{
                                                    marginRight: 5
                                                }} />

                                                Bobby Davis</a></th>
                                            <td><span className="badge badge-lg badge-pill bg-warning" style={{
                                                fontSize: 14,
                                                borderRadius: 20,
                                                color: "#000"
                                            }} data-key="t-new">Tier 2</span></td>
                                            <td>TV</td>
                                            <td>Fri, November 25 2022</td>
                                            <td><a href="javascript:void(0);" className="link-success">View More <i className="ri-eye-line align-middle" /></a></td>
                                        </tr>
                                    </tbody>
                                </table>
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
