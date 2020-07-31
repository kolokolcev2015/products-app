import React, {Component} from 'react';
import './Modal.css'
import AddNewProduct from "./AddNewProduct";

class AddForm extends Component {

        state ={
            isOpen: false
        }

    ChangeOnOpenStatus = () => {
        this.setState({ isOpen: true });
    }

    ChangeOnClosedStatus = () => {
        this.setState({ isOpen: false });
    }

    render() {
        return (
                <div className="btnAdd">
                    <button className="opnModal btn" onClick={this.ChangeOnOpenStatus}>Добавить</button>
                    { this.state.isOpen && <AddNewProduct close={this.ChangeOnClosedStatus}/> }
                </div>
        );
    }
}

export default AddForm;