import React,{Component} from 'react'
import Classes from './BurgerIngredients.module.css'//BurgerIngredients
import PropTypes from 'prop-types';

class Burgeringredients extends Component {
    
    render(){
       
        let ingredients=null;
        // console.log('props value is',this.props)
        // console.log('key value is',this.props.key)
                switch (this.props.type) 
                 {
                    case('BreadBottom'):
                        ingredients= <div className={Classes.BreadBottom}></div>
                         break;
                    case ('BreadTop'):
                        ingredients= (
                            <div className={Classes.BreadTop}>
                                <div className={Classes.Seeds1}></div>
                                <div className={Classes.Seeds2}></div>
                            </div> 
                        ); 
                           break; 
                    case( 'Meat') :
                        ingredients=<div className={Classes.Meat}></div>
                        break;
                    case ('Cheese'):
                        ingredients=<div className={Classes.Cheese}></div>
                        break;
                    case ('Salad'):
                        ingredients=<div className={Classes.Salad}></div>
                        break;
                    case ('Bacon'):
                        ingredients=<div className={Classes.Bacon}></div>
                        break;
                    default:
                        ingredients=null;
                        break;
                }
                return ingredients;  
    }
           
}
//Convrt type into string because everytime our type is has to be string
//for that install proptype ->  npm install --save prop-types
Burgeringredients.propTypes=
    {
        type:PropTypes.string.isRequired  // this PropTypes is the key wordd which we use upper to import
    };

export default Burgeringredients
