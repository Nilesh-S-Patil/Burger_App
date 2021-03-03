import React from 'react'
import Classes from './Button.module.css'

export default function Button(props) {
    return (
        <div>
            <button className={[Classes.Button ,Classes[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
        </div>
    )
}
