import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger'
import Wrapper from '../../HOC/Wrapper'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import Layout from '../../Components/Layout/Layoyt' 
const INGREDIENTS_PRICE={
    Salad:5,
    Meat:10,
    Cheese:10,
    Bacon:5
}

export default class BurgerBuilder extends Component {
    state={
        ingredients:{
            Salad:0,
            Bacon:0,
            Meat:0,
            Cheese:0,
        },
        total_price:20,
        purchasable:false,
        purchasing:false
    }

    //this method is use to change the status of purchasing
    purchasingHandler=()=>
    {
        this.setState({purchasing:true})
    }
    clickedforpurchasing=()=>{
        this.setState({purchasing:false})
    }
    continuepurchasing=()=>
    {
        alert('You continue');
    }

    changePurchasableState=(ingredients)=>{
        // const ingredients={
        //     ...this.state.ingredients
        // }
        const sum=Object.keys(ingredients)
              .map(igkeys=>{
                    return ingredients[igkeys]
              })
              .reduce((sum,el)=>{
                    return sum+el
              },0);
        this.setState({purchasable:sum>0})
    }
    addIngredients=(type)=>{
       const old_count=this.state.ingredients[type]   //here we fetch the count for object[type] i.e count of salad,chees,bacon and meat which is initially 0
       const updadated_count=old_count+1; // here we  update the count of type i.e update in chees,meat... as per button click
       const updated_ingredients={
        ...this.state.ingredients
       }
           
       
       updated_ingredients[type]=updadated_count
    //    const old_price= this.state.total_price
    //    const_new_price=INGREDIENTS_PRICE[type]
       const  updated_price=this.state.total_price+INGREDIENTS_PRICE[type] //type means we fetch price for specific object thats why use type
       this.setState({ingredients:updated_ingredients,total_price:updated_price,purchasing:false})
       this.changePurchasableState(updated_ingredients);

    }

    removeIngrients=(type)=>{
        const old_count=this.state.ingredients[type]
        if(old_count<=0)
        {return }
       const updadated_count=old_count-1;
       const updated_ingredients={
        ...this.state.ingredients
       }
           
       
       updated_ingredients[type]=updadated_count
    //    const old_price= this.state.total_price
    //    const_new_price=INGREDIENTS_PRICE[type]
       const  updated_price=this.state.total_price-INGREDIENTS_PRICE[type]
    //    if(this.state.ingredients!=0)
     
       this.setState({ingredients:updated_ingredients,total_price:updated_price,purchasing:false})
       this.changePurchasableState(updated_ingredients);
    
    }
    

    render() {
        // console.log(this.state.purchasing)
        const disableInfo={
            ...this.state.ingredients
        };
        for( let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <=0   //here  disableinfo[key] is value of each object like salad:0,meat:0 ...
        }                                           //key refers to value of each object
        return (
            <Wrapper>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    cancel={this.clickedforpurchasing} 
                    conitinue={this.continuepurchasing}
                    price={this.state.total_price}/>
                </Modal>
                <Layout show={this.state.purchasing} disable={this.clickedforpurchasing}/>
                
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredients={this.addIngredients}
                removeIngrients={this.removeIngrients}
                disabled={disableInfo}
                price={this.state.total_price}
                purchasable={this.state.purchasable}
                purchasing={this.purchasingHandler}
                />
            </Wrapper>
                
            
        )
    }
}
