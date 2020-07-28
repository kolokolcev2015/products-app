import React, {Component} from 'react';
import Login from "./components/LoginPage/Login";
import {BrowserRouter, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Products from "./components/ContentPage/Products";


function App({authStatus}) {
  if (!authStatus){
    return <Login/>
  }else{
    return <Products/>
  }
}
const mapStateToProps = state => {
  return{
    authStatus: state.auth.isAuth
  } }

export default connect(mapStateToProps,null)(App)
