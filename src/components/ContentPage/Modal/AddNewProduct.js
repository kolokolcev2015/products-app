import React, {Component, useState} from "react";
import {createPost} from "../../../redux/actions";
import {connect} from "react-redux";

class AddNewProduct extends Component {
    constructor() {
        super();
        this.state = {
            nameValue: "",
            countValue: "",
            costValue: "",
            msg: ''
        };
        this.setNameValue = this.setNameValue.bind(this)
        this.setCountValue = this.setCountValue.bind(this)
        this.setCostValue = this.setCostValue.bind(this)
        this.btnHandler = this.btnHandler.bind(this)
        this.setMsg = this.setMsg.bind(this)
    }
    setNameValue(event){
        this.setState({nameValue: event.target.value})
    }
    setCountValue(event){
        this.setState({countValue: event.target.value})
    }
    setCostValue(event){
        this.setState({costValue: event.target.value})
    }
    setMsg(message){
        if (message === '') return this.setState({msg: ''})
        this.setState({msg: message})
    }
     btnHandler(event) {
        event.preventDefault()
        if (this.state.nameValue.trim() &&
            this.state.countValue.trim()&&
            this.state.costValue.trim()){
            if (this.state.countValue >= 0 &&
                this.state.costValue >= 0){
                this.setMsg('')
                this.props.createPost(this.state.nameValue,this.state.countValue, this.state.costValue)
                this.props.close()
            }else this.setMsg('Значения числовых полей не могут быть отрицательными')
        }else this.setMsg('Введите непустые значения')

         console.log(this.state.nameValue)
         console.log(this.state.countValue)
         console.log( this.state.costValue)
    }
    render() {
    return(
        <div className="Modal">
            <div className="Modal-body">
                <button className="Quit" onClick={this.props.close}>X</button>
                <h1>Введите данные</h1>
                <span className="err">{this.state.msg}</span>
                <form className="f" onSubmit={this.btnHandler}>
                    <span className="LabelsInp">Название</span>
                <input className="modal-inp"  placeholder="Название" value={this.state.nameValue} onChange={this.setNameValue} required/>
                    <span className="LabelsInp">Количество(шт)</span>
                <input className="modal-inp" type='number'  placeholder="Количество(шт)" value={this.state.countValue} onChange={this.setCountValue} required/>
                    <span className="LabelsInp">Стоимость(руб)</span>
                <input className="modal-inp" type='number' placeholder="Стоимость(руб)" value={this.state.costValue} onChange={this.setCostValue} required/>
                <button type="submit" className="btnInput btn">Добавить</button> </form>
            </div>
        </div>
    )}
}

const StateToProps={
    createPost
}
export default connect(null,StateToProps)(AddNewProduct)
/*<form className="f" onSubmit={btnHandler}>
           <input value={value} onChange={event => setValue(event.target.value)} className="inp"/>
           <button type="submit" className="btn">Add todo</button>
       </form>*/
