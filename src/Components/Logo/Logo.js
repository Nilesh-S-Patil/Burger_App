import React from 'react'
import Logoimage from '../../Asset/Image/burger-logo.png'
import Classes from './Logo.module.css'

export default function Logo() {
    return (
        <div className={Classes.Logo}>
            <img src={Logoimage} alt="MyLogo"/>
        </div>
            
        
    )
}
