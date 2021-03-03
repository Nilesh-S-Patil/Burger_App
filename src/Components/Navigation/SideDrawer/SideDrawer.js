import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'


export default function SideDrawer(props) {
    let attachClasses=[Classes.SideDrawer, Classes.Close]
    
    if(props.open)
    attachClasses=[Classes.SideDrawer, Classes.Open]
    return (
        <div>
            <Backdrop show={props.open} closed={props.closed}/>
        <div className={attachClasses.join(' ')}>
            <div className={Classes.Logo}>
            <Logo/>
            </div>
           
            <nav>
             <NavigationItems/>
            </nav>
        </div>
        </div>
        
    )
}
