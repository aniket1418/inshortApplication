import React from 'react'
import TemporaryDrawer from './HamburgerMenu'

import style from './NavInshort.css'
const NavInshort = ( {setCategory}) => {
    return (
        <div className="nav">
            <div className="icon">
            <TemporaryDrawer setCategory={setCategory}/>
            </div>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="Logo" height="80px"/>
        </div>
    )
}

export default NavInshort
