import React, {Component, useState} from "react";
import {changeData, createPost, getData, isNotAuth} from "../../redux/actions";
import {connect} from "react-redux";
import {changeValues, getSearchName} from "../../API/api";
import {CHANGE_COST, CHANGE_COUNT, CHANGE_DATE, CHANGE_NAME, CHANGE_TIME} from "../../redux/Types";
import DatePicker from 'react-datepicker';
import DateTimePicker from "react-datetime-picker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment"
import TimePicker from "react-time-picker";


class InputViewRecord extends Component{

    constructor() {
        super();
        this.state = {
            value: '',
            dateValue: new Date()
              }
        this.changeInputHandler = this.changeInputHandler.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.changeType = this.changeType.bind(this)
        this.setDate = this.setDate.bind(this)
    }
    setDate = (value) => {
        this.setState({
            value: value
        })


    }
    changeType = () =>{
         if (this.props.type === CHANGE_NAME) return 'text'
        else return 'number'

    }
    saveChanges = () =>{
        console.log('get data')
        if (this.state.value!==""){
            DateOrNo(this.props.type) ? this.props.changeData(this.props.type,
                                                            this.props.id,
                                                            moment(this.state.value).format('DD.MM.YYYY')) :
                                        this.props.changeData(this.props.type,
                                            this.props.id,
                                            this.state.value)

        }
        this.props.change()
    }
    changeInputHandler = value =>{
        this.setState(prev => ({...prev,...{
                value: value
            }}), ()=> console.log(this.state.value))
    }

    render(){
    return(

        <div className="containerInput">
        <form className="inputClass">
            {DateOrNo(this.props.type) ? <DatePicker
                    selected={this.state.value}
                    dateFormat='dd.MM.yyyy'
                    maxDate={new Date()}
                    onChange={value => this.changeInputHandler(value)}
                    onCalendarClose={this.saveChanges}
                    autoFocus/> :
                TimeOrNo(this.props.type) ? <TimePicker
                        value={this.state.value}
                        onClockClose={this.saveChanges}
                        onChange={value => this.changeInputHandler(value)}
                        autoFocus/>

                    : <input type={this.changeType(this.props.type)}
                             placeholder={this.props.plh}
                             value={this.state.value}
                             onBlur={this.saveChanges}
                             onChange={event => this.changeInputHandler(event.target.value)} className="inp" autoFocus/>}

        </form>
        </div>
    )}
}
const getActionAuth={
    changeData
}
export default connect(null,getActionAuth)(InputViewRecord)
function count(count) {
    return count++;
}
function DateOrNo(type) {
    if (type === CHANGE_DATE) return true
    else return false
}
function TimeOrNo(type) {
    if (type === CHANGE_TIME) return true
    else return false
}
/* ^(\d{2})([.\/-])(\d{2})\2(\d{4})$ */