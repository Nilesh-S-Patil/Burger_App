import React from 'react'
import Classes from './Backdrop.module.css'

export default function Backdrop(props) {
    // console.log('show in backdrop',props.show)
    return (
        <div>
              {/* <div className={Classes.Backdrop}> */}
           {props.show ?<div className={Classes.Backdrop} onClick={props.closed}/>:props.disable }
        </div>
        // </div>
      
    )
}
