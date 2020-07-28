import React from 'react';
import Item from "./Item";
import {connect} from "react-redux";

const ItemsProduct = ({list}) => {
        return (list.map(todo => <Item name = {todo.name}
                                 count = {todo.count}
                                 cost = {todo.cost}
                                 date = {todo.date}
                                 time = {todo.time}
                                 key={todo.id}
                                 id={todo.id}/>
                )
        );
}

const getList = state => {
    return{
        list: state.posts.posts
    }
}

export default connect(getList,null)(ItemsProduct)