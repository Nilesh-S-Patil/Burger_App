import React from 'react'
import Classes from './NavigationItem.module.css'
export default function NavigationItem(props) {
    return (
        <div>
            <li className={Classes.NavigationItem}> 
            <a href={props.link}
            className={props.active?Classes.active:null}>{props.children}</a>
            </li>
            
        </div>
    )
}
