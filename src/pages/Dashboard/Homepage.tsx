import React from 'react'
import { Navbar, Sidebar, Welcome } from '../sections'
import RootPage from './RootPage'



export default function Homepage() {
    return (
       <RootPage>
        <Welcome />
       </RootPage>

    )
}
