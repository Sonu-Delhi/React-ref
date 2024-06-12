import React, {Component, createRef} from "react";

export default class App extends Component{
    constructor(){
        super();
        this.ref=createRef();
    }
    buttonClick = ()=>{
        if(this.ref.current.value.length>0){
            console.log(this.ref.current.value);

        }else{
            alert("Please enter some value");
        }
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.ref}/>
                <button onClick={this.buttonClick}>Click</button>
            </div>
        )
    }
}