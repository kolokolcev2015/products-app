import React, {Component} from 'react';
import InputViewRecord from "./InputView/InputView";
import TextView from "./TextView";

class Item extends Component {
    state ={
        onClick : false
    }

    Clicked = () =>{
        this.setState( this.state.onClick ? { onClick: false } : { onClick: true });
    }

    render() {
        return (
            this.state.onClick ?
                <InputViewRecord id={this.props.id} plh={this.props.value} change={this.Clicked} type={this.props.type}/> :
                <TextView value={this.props.value} change={this.Clicked}/> )
    }
}

export default Item