import React from 'react'
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default function Toolbar(props) {
    return (
        <div>
            <header className={Classes.Toolbar}>
                {/* <div onClick={props.clicked}>Menu</div> */}
                <DrawerToggle clicked={props.clicked}/>
                <div className={Classes.Logo}>
                <Logo/>
                </div>
                
                <nav className={Classes.DesktopOnly}>
                <NavigationItems/>
                </nav>
                
                
            </header>
            
        </div>
    )
}
