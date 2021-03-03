import React from 'react'
import Classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

function BuildControls(props) {
    const controls=[
        {lable:'Salad' ,type:'Salad'},
        {lable:'Bacon' ,type:'Bacon'},
        {lable:'Meat' ,type:'Meat'},
        {lable:'Cheese' ,type:'Cheese'},
    ]

    // console.log(props.purchasing)
    return (
        
        <div className={Classes.BuildControls} >
            <p>Current Price:<strong>{props.price}</strong></p>
          {
              controls.map((ctr)=>(
                  <BuildControl 
                  lable={ctr.lable} 
                  key={ctr.type}
                  added={()=>props.addIngredients(ctr.type)}
                  removed={()=>props.removeIngrients(ctr.type)}
                  isdisabled={props.disabled[ctr.type]}
                  />
              ))
          }  

          <button className={Classes.OrderButton} 
          disabled={!props.purchasable}
          onClick={props.purchasing} > ORDER NOW
          </button>
        </div>
    )
}

export default BuildControls
