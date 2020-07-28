import React, {Component} from 'react';
import {getRequestPassword} from '../../API/api'
import login from "./Login.css"
import  Cookies from 'universal-cookie'
import {isAuth} from "../../redux/actions";
import {connect} from "react-redux";

class Login extends Component {
    constructor() {
        super();
        this.state ={
            password:'',
            errorText: ''
        }
        this.btnHandler = this.btnHandler.bind(this)
        this.setValue = this.setValue.bind(this)
    }
    btnHandler = event => {
        event.preventDefault()
        if (this.state.password.trim()){
            getRequestPassword(this.state.password).then(request =>{
                console.log(request.data)
               if (request.data !== 200){
                   this.setState({
                       errorText: 'Некорректный пароль',
                       password: ''
                   })
               }else{
                   this.setState({
                       errorText: ''
                   })
                   this.props.isAuth()
               }
            })
        }else {
            this.setState({
                errorText: 'Вы не заполнили поле'
            })
        }
    }
    setValue(value){
        this.setState({
            password: value
        })
    }

    render() {
        let error;
        if (this.state.errorText.trim()){
            error = <p>{this.state.errorText}</p>
        }
        return (
        <div className="Login">
            <div className="RectLogin">
                Вход
            </div>
            <form action="" className="log">
                <div className="InputPass"><input value={this.state.password}
                                                  onChange={event => this.setValue(event.target.value)}
                                                  className="Pass" type="password" placeholder="Пароль" required/>
                <div className="bottomBorder">
                    {error}
                </div></div>
                <button className="btnLogin btn" onClick={this.btnHandler} >Войти</button>
            </form>
            </div>


        );
    }
}
const getActionAuth={
    isAuth
}
export default connect(null,getActionAuth)(Login)