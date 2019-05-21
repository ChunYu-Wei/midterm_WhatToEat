import React from 'react';
import { NavLink, Switch, Route ,Redirect} from 'react-router-dom'
import Button from './Button'

class Home extends React.Component{
    render(){
        return(
            <div  >
                <h1 id="header">This is my app</h1> 
                <div className="button_list">
                    <Button src="./image/choose.png" id="choose_btn" class="button"  link="/choose" />
                    <Button src="./image/add.png" id="add_btn" class="button"link="/add" />  
                </div>         
            </div> 

        )       
    }
}

export default Home;