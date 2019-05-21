import React from 'react';
import clientSocket from './socket';
import Button from './Button'

var restaurant_result = [];
var number = 0;



clientSocket.on('choosed',(data)=>{
    console.log("choosed get");
   
    restaurant_result = data.map(com => com.name)
    number = restaurant_result.length;
    console.log(restaurant_result);
    
  
})

class RST extends React.Component{



    render(){
        return(
            <div>
                {this.props.content}
            </div>
        )       
    }
}

class choose_result extends React.Component{

    select = () => {
        var tem = restaurant_result;
        var time = 0;
        var interval = setInterval(() => {
            var random =  Math.floor(Math.random()*number);   
            restaurant_result = [];
            restaurant_result.push(tem[random])  ;
            this.forceUpdate();
            time++
            if(time === 150){
                clearInterval(interval);
            }
        },10)
        
    }

    render(){
        return(
            <React.Fragment>
                <Button id="re_choose_btn" src="../image/rechoose.png"   link="/choose" />       
                <Button id="back_home_btn" src="../image/home.png" link="/home" />
                <Button id="select_btn" src="../image/select.png" onClick={this.select} />
                   
                <div id="restaurant_result_container">
                    {restaurant_result.map(name=>{
                        return <RST content={name} />
                    })}

                    
                </div>

               
               
            </React.Fragment>

        )       
    }
}

export default choose_result;

