import React from 'react'
import {Outlet} from 'react-router-dom'

import Header from './Header'

document.title = 'Home'
export default function HomeLayout() {


        //keeping the layout here just for ease even though i could get rid of it and just render the header as the / route
    return (
        <>
        <Header/>
        
        </>
    )
}