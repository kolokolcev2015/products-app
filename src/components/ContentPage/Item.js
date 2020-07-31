import React, {Component} from 'react';
import {render} from "react-dom";
import {connect} from "react-redux";
import {deletePost} from "../../redux/actions";
import TextView from "./Content/TextView";
import InputViewRecord from "./Content/InputView/InputView";
import {CHANGE_COST, CHANGE_COUNT, CHANGE_DATE, CHANGE_NAME, CHANGE_TIME} from "../../redux/Types";


class Item extends React.Component{

   state = {
        clickedName: false,
        clickedCount: false,
        clickedCost: false,
        clickedDate: false,
        clickedTime: false
    };
    ClickedTextViewCost = () =>{
        this.setState( this.state.clickedCost ? {
            clickedCost: false
        } : {
            clickedCost: true
        });
    }
    ClickedTextViewDate = () =>{
        this.setState( this.state.clickedDate ? {
            clickedDate: false
        } : {
            clickedDate: true
        });
    }
    ClickedTextViewName = () =>{
    this.setState( this.state.clickedName ? {
    clickedName: false
} : {
    clickedName: true
});
}
    ClickedTextViewCount = () =>{
        this.setState( this.state.clickedCount ? {
            clickedCount: false
        } : {
            clickedCount: true
        });
    }
    ClickedTextViewTime = () =>{
        this.setState( this.state.clickedTime ? {
            clickedTime: false
        } : {
            clickedTime: true
        });
    }

    render() {
        return (
            <div className="fromServer">
                <div className="rows items" >
                    {renderTextOrInput(this.state.clickedName,this.props.name,this.ClickedTextViewName,CHANGE_NAME,this.props.id)}
                    {renderTextOrInput(this.state.clickedCount,this.props.count,this.ClickedTextViewCount,CHANGE_COUNT,this.props.id)}
                    {renderTextOrInput(this.state.clickedCost,this.props.cost,this.ClickedTextViewCost,CHANGE_COST,this.props.id)}
                    {renderTextOrInput(this.state.clickedDate,this.props.date,this.ClickedTextViewDate,CHANGE_DATE,this.props.id)}
                    {renderTextOrInput(this.state.clickedTime,this.props.time,this.ClickedTextViewTime,CHANGE_TIME,this.props.id)}

                    <button className="delProduct item" onClick={() => this.props.deletePost(this.props.id)}>X</button>
                </div>
            </div>
        );
    }

}
function renderTextOrInput(state,name,change,type,id) {
    return(state ?
        <InputViewRecord id={id} plh={name} change={change} type={type}/> :
        <TextView value={name} change={change}/>)
}
const mapDispathDel={
    deletePost
}

export default connect(null,mapDispathDel)(Item);
