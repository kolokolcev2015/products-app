import React, {Component, useEffect, useRef} from 'react';
import ItemsProduct from "./ItemsProduct";
import {createPost, getData, isAuth, isNotAuth} from "../../redux/actions";
import {connect} from "react-redux";
import styleContent from './styleContent.css'
import {getList, getSearchName} from "../../API/api";
import AddForm from "./Modal/AddForm";


class Products extends Component {
constructor() {
    super();
    this.state = {
        name: ''
    }
    this.changeInputHandler = this.changeInputHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
}

    submitHandler = event =>{
        event.preventDefault()
        const {name} = this.state
        getSearchName(name).then(request => this.props.getData(request.data))
        this.setState({value: ''})

    }

    changeInputHandler = value =>{
        this.setState(prev => ({...prev,...{
               name: value
            }}), () => {
            getSearchName(this.state.name).then(request => this.props.getData(request.data))
        })
    }

    render() {
        return (
        getList().then(request =>  this.props.getData(request.data)),
        <div className="content">
            <div className="header block">
                <div className="Logo">
                    <p>Товары</p>
                </div>
                <div className="Info">
                    <div className="personsInfo">
                        Здравствуйте, Кирилл!
                    </div>
                    <button className="btnLogout btn" onClick={() => this.props.isNotAuth()}>Выйти</button>
                </div>
            </div>
            <div className="searchAdd block">
                <div className="search">
                    <form onSubmit={this.submitHandler}>
                        {/*Поисковый инпут*/}
                        <input
                            type="text"
                            className="inputSearch"
                            id="name"
                            value={this.state.name}
                            name="name"
                            placeholder="Искать..."
                            onChange={event => this.changeInputHandler(event.target.value)}/>
                    </form>
                </div>
                <div className="btnAdd">
                    <AddForm/>
                </div>
            </div>
            <div className="mainContent block">
            <div className="rows namesrows">
                    <div className="nameProduct item">Название</div>
                    <div className="countProduct item">Количество (шт)</div>
                    <div className="costProduct item">Цена (руб)</div>
                    <div className="dateProduct item">Дата добавления</div>
                    <div className="timeProduct item">Время добавления</div>
                    <div className="item">Удалить</div>
                </div>

            <ItemsProduct/>
            </div>

        </div>
        );
    }
}

const getActionAuth={
    isNotAuth,
    createPost,
    getData
}
export default connect(null,getActionAuth)(Products)
