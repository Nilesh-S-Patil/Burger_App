import React from 'react'
import Wrapper from '../../../HOC/Wrapper/Wrapper'
import Button from'../../UI/Button/Button'

export default function OrderSummary(props) {
    const ingredients=Object.keys(props.ingredients)
        .map(igkeys=>{
            return <li key={igkeys}><span>{igkeys}</span>:{props.ingredients[igkeys]}</li>
        })
    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with folloeing ingridients </p>
                <ul>
                    {ingredients}
                </ul>
            <p><strong><b>Total Price={props.price}</b></strong></p>
            <p>Do you want to continue..?</p>
            <Button btnType="Danger"clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.conitinue} >CONTINUE</Button>
       </Wrapper>
    )
}
