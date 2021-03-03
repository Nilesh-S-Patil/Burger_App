//import { object } from 'prop-types'
import React from 'react'
import Classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/Burgeringredients'

function Burger(props) {
    //****Converting Object into an array beccause map method couldent apply on object***
  
    let transformedIngrdients=Object.keys(props.ingredients) //here we got the array of keys.we are converting object into array on basis of keys
                            .map(igKeys=>{                          //here keys are salad,chees,bacon,meat
                                return [...Array(props.ingredients[igKeys])] //here we convert that keys into Array
                                .map ((_,i )=>{
                                    // console.log(i,igKeys)                        
                                    return <BurgerIngredients type={igKeys}key={igKeys+i} />                               
                                })
                            }) 
                            .reduce((arr,el)=>{
                                // console.log('pre',arr,el)
                                return arr.concat(el)
                               },[])  
                            if(transformedIngrdients.length===0){
                              transformedIngrdients= <p>Plz Add indedredients</p>
                            }                     
                         
                     
    return (
      
        
        <div className={Classes.Burger}>
            <BurgerIngredients type='BreadTop' />
            
            {transformedIngrdients} 
           <BurgerIngredients type='BreadBottom' /> 
        </div>
    )
}

export default Burger
