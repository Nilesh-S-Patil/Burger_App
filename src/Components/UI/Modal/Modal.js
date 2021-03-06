import React from 'react'
import Classes from './Modal.module.css'

export default function Modal(props) {
    return (
        <div className={Classes.Modal}
        style={{
                    transform:props.show?'translateY(0)':'translateY(-100vh)',
                    opacity:props.show?'1':'0'

                }}
                >
            {props.children}
                                 
        </div>
    )
}
