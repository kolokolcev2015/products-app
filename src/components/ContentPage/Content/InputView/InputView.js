import React, {Component} from "react";
import {changeData} from "../../../../redux/actions";
import {connect} from "react-redux";
import {CHANGE_DATE, CHANGE_NAME, CHANGE_TIME} from "../../../../redux/Types";
import moment from "moment"
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";


class InputView extends Component{

    state = {
        value: ''
    }

    changeType = () => {
        if (this.props.type === CHANGE_NAME) return 'text'
        else return 'number'
    }
    saveChanges = () => {
        if (this.state.value!==""){
            let value = this.state.value
            if (this.props.type === CHANGE_DATE) value = moment(value).format ('DD.MM.YYYY')
            this.props.changeData(this.props.type, this.props.id, value)
        }
        this.props.change()
    }

    changeInputHandler = value =>{
        this.setState(prev => ({...prev,...{ value: value } }) )
    }

    render(){
        switch (this.props.type) {
            case CHANGE_DATE:
                return <DateInput value={this.state.value} changeInputHandler = {this.changeInputHandler} saveChanges={this.saveChanges}/>
            case CHANGE_TIME:
                return <TimeInput value={this.state.value} changeInputHandler = {this.changeInputHandler} saveChanges={this.saveChanges}/>
            default:
                return <input type={this.changeType(this.props.type)}
                                      placeholder={this.props.plh}
                                      value={this.state.value}
                                      onBlur={this.saveChanges}
                                      onChange={event => this.changeInputHandler(event.target.value)} className="inp" autoFocus/>

        }
    }
}
const getActionAuth={ changeData }
export default connect(null,getActionAuth)(InputView)
