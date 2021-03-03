import React,{Component} from 'react'
import Wrapper from '../../HOC/Wrapper'
import Backdrop from '../UI/Backdrop/Backdrop'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layoyt extends Component{
    state={
        ShowSlideDrawer:true
    }

    sideDrawerCloseHandler=()=>
    {
        this.setState({ShowSlideDrawer:false})
    }
render(){
   
    return(
        <Wrapper>
            
            <div>
            <SideDrawer open={this.state.ShowSlideDrawer} closed={this.sideDrawerCloseHandler}/>
            <Toolbar/>
            <Backdrop show={this.props.show} closed={this.props.disable}/>
            </div>
            <main>
                {this.props.children}
            </main>     
        </Wrapper>

    )
}
}
export default Layoyt
