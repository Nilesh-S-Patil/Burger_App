import React from 'react'
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

export default function Toolbar() {
    return (
        <div>
            <header className={Classes.Toolbar}>
                <div>Menu</div>
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
