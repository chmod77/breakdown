import React, { useEffect, useState } from 'react'
import { getVerificationRequests } from '../../services/rest'
import { Table } from '../sections'
import RootPage from './RootPage'

export default function CreatorVerificationRequestsPage() {
  const [requests, setRequests] = useState<null | any | []>([])

  const onLoad = async () => {
    let verificationRequests = await getVerificationRequests()
    if (verificationRequests?.success) {
      setRequests(verificationRequests?.requests)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])
  return (
    <RootPage>

      <Table title={"Creator Verification Requests"}>
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
            {
              requests?.length > 0 ? (
                requests.map((request: any, index: any) => (
                  <tr>
                    <th scope="row"><a href="#" className="fw-medium"><img className="rounded-circle header-profile-user" src={`${request.photo_id == null ? 'assets/images/user-vector.png' : request.photo_id}`} alt={`${request.known_as}`} style={{
                      marginRight: 5
                    }} />{request.known_as}</a></th>
                    <td><span className="badge badge-lg badge-pill bg-warning" style={{
                      fontSize: 14,
                      borderRadius: 20,
                      color: "#000"
                    }} data-key="t-new">Tier {request.tier}</span></td>
                    <td>TV</td>
                    <td>{`${new Date(request.created_at).toDateString()}`}</td>
                    <td><a href="javascript:void(0);" className="link-success">View More <i className="ri-eye-line align-middle" /></a></td>
                  </tr>
                ))
              ) : (
                null
              )
            }


          </tbody>
        </table>
      </Table>
    </RootPage>
  )
}
