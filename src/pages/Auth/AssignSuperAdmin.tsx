import React, { useState, useCallback, useRef } from 'react'
import { Footer, openNotificationWithIcon } from '../../components'
import urls from '../../services/urls';
import { Link } from 'react-router-dom'
import SectionMessage from '@atlaskit/section-message';
import { Mentions } from 'antd';
import debounce from 'lodash/debounce';
import type { OptionProps } from 'antd/es/mentions';
import { assignAdmin } from '../../services/rest';
import { Spin } from 'antd';




const { Option } = Mentions;

export default function AssignSuperAdminPage() {
    const [found, setFound] = useState<boolean | null>(null)
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const [assigning, setAssigning] = useState(false)

    const [users, setUsers] = useState([]);
    const ref = useRef<string>();

    const handleAssign = async (user_id: any) => {
        setAssigning(true)
        let params = {
            user_id: user_id
        }
        let resp = await assignAdmin({ params })
        console.log(resp)
        setAssigning(false)
        if (resp.success === true) {
            openNotificationWithIcon('success', 'Success', 'You have successfully assigned admin!')
        }

    }

    const loadUsers = (key: string) => {
        if (!key) {
            setUsers([]);
            return;
        }

        fetch(`${urls.searchUserUrl}?username=${key}`)
            .then(res => res.json())
            .then((items) => {
                console.log(items)
                if (ref.current !== key) return;
                setLoading(false);
                console.log(items)
                if (items?.users) {
                    setUsers(items?.users.slice(0, 10));

                }
            });
    };

    const onSelect = (option: any) => {
        console.log('select', option);
        console.log(option.children)
        //@ts-ignore
        let obj = option.children.find(data => data.type === 'img');
        console.log(obj?.props?.src)
        setSelectedUser({
            username: option.value,
            id: option.key,
            avatar: obj?.props?.src
        })
    }
    const onChange = (value: string) => {
        console.log(value, selectedUser?.username)
        if (value.substring(1) !== selectedUser?.username && selectedUser !== null) {
            setSelectedUser(null)
        }
    };

    const debounceLoadUsers = useCallback(debounce(loadUsers, 400), []);

    const onSearch = (search: string) => {
        console.log('Search:', search);
        ref.current = search;
        setLoading(!!search);
        setUsers([]);
        debounceLoadUsers(search);
    };


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
                    <Spin spinning={assigning}>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="p-2 mt-4 ">
                                    <form>
                                        <div className="mb-3">
                                            <Mentions style={{ width: '100%' }}
                                                loading={loading}
                                                onSearch={onSearch}
                                                onSelect={onSelect}
                                                onChange={onChange}
                                                placeholder="Input @ to search and select users"
                                            >
                                                {users.map(({ id, username, avatar }) => (
                                                    <Option key={id} value={username} className="antd-demo-dynamic-option">
                                                        <img src={avatar !== null ? avatar : "assets/images/user-vector.png"} alt={username} height={30} width={30} style={{
                                                            borderRadius: "50%",
                                                            marginRight: 10
                                                        }} />
                                                        <span>{username}</span>

                                                    </Option>
                                                ))}
                                            </Mentions>

                                            {/* <input type="text" className="form-control" id="username" placeholder="Search by username" onChange={(e) => {
                                            console.log(e.target.value)
                                            onHandleSearch(e.target.value)
                                        }} /> */}
                                        </div>
                                        <div className="mt-4">
                                            {
                                                selectedUser !== null && (
                                                    <div className='pb-1 text-center'>
                                                        <img src={selectedUser.avatar} height={50} width={50} style={{
                                                            borderRadius: "50%"
                                                        }} />
                                                        <p className="fw-bold pt-1" style={{
                                                            fontFamily: "Roboto"

                                                        }}>{selectedUser.username}</p>
                                                        <div className="mb-2">
                                                            <button
                                                                className="btn w-50 btn-sm " style={{
                                                                    backgroundColor: "#721003",
                                                                    color: "#fff",
                                                                    fontFamily: "Roboto"
                                                                }}
                                                                type="button"
                                                                onClick={() => handleAssign(selectedUser.id)} >ASSIGN {selectedUser.username}</button>
                                                            {/* <Link to={"/signin-admin"} className="btn w-50 btn-sm " style={{
                                                            backgroundColor: "#721003",
                                                            color: "#fff",
                                                            fontFamily: "Roboto"
                                                        }} type="button">ASSIGN {selectedUser.username}</Link> */}
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
    )
}
