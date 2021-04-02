import React, { Component } from 'react'
import TableComponent from './TableComponent';

export class Practice extends Component {
    constructor(props){
        super(props);
        this.state={
            Iname:"",
            Iprice:"",
            checker:false,
            something:true
        }
        localStorage.removeItem('obj')
    }
    onHandleChangeName = (e) =>{
        this.setState({
            Iname:e.target.value
        })
    }
    onHandleChangePrice = (e) =>{
        this.setState({
            Iprice:e.target.value
        })
    }
    onHandleSubmit =()=>{
        this.setState({
            something:false
        })
        let obj = JSON.parse(localStorage.getItem('obj') || '[]');
        obj.push(this.state)
        localStorage.setItem('obj',JSON.stringify(obj))
        console.log(obj);
    }
    onHandleSubmitone =()=>{
        this.setState({
            something:true,
            checker:false,
            Iname:"",
            Iprice:""
        })
    }  
    render() {
        if(this.state.something){return (
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <label>Item Name: </label>
                    <input type="text" value={this.state.Iname} onChange={this.onHandleChangeName} /><br />
                    <label>Item Price: </label>
                    <input type="text" value={this.state.Iprice} onChange={this.onHandleChangePrice}/>
                    <input type="submit"></input>
                </form>
            </div>
        )}
        
        else{
            return(
                <div>
                    <TableComponent />
                    <button onClick={this.onHandleSubmitone}>Add Item</button>
                </div>
            )
        }
    }
}

export default Practice

