import React, { Component } from 'react'
// import Layoyt from 'C:/Users/patil/Desktop/BurgerApp/burgerbuilder/src/Components/Layout/Layoyt.js'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'
import Layout from './HOC/Layout/Layoyt'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>   
      </Layout>
        
      
    )
  }
}
