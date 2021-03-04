import React,{Component} from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Backdrop from '../../Components/UI/Backdrop/Backdrop'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layoyt extends Component{
    state={
        ShowSlideDrawer:false,
    
    }

    sideDrawerCloseHandler=()=>
    {
        this.setState({ShowSlideDrawer:false})
    }
    SlideDrawerTohggleHandler=()=>{
        
        this.setState((prevState)=>{
            return {ShowSlideDrawer:!prevState.SideDrawer}
        })
    }
render(){
   
    return(
        <Wrapper>
            
            <div>
            <SideDrawer open={this.state.ShowSlideDrawer} closed={this.sideDrawerCloseHandler}/>
            <Toolbar clicked={this.SlideDrawerTohggleHandler}/>
            <Backdrop show={this.props.show} closed={this.props.disable} />
            </div>
            <main>
                {this.props.children}
            </main>     
        </Wrapper>

    )
}
}
export default Layoyt
