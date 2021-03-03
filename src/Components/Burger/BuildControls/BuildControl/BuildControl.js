import React from 'react'
import Classes from './BuildControl.module.css'

function BuildControl(props) {
    return (
        <div className={Classes.BuildControl}>
           <div className={Classes.Label}>{props.lable}</div> 
            <button className={Classes.Less} onClick={props.removed} disabled={props.isdisabled}>Less</button>
            <button className={Classes.More} onClick={props.added}>More</button>
            
        </div>
    )
}

export default BuildControl
