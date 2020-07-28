import React, {Component} from 'react';
import Modal from './Modal.css'
import AddNewProduct from "./AddNewProduct";
class AddForm extends Component {
    constructor() {
        super();
        this.state ={
            isOpen: false
        }
        this.ChangeOnOpenStatus = this.ChangeOnOpenStatus.bind(this);
        this.ChangeOnClosedStatus = this.ChangeOnClosedStatus.bind(this);

    }
    ChangeOnOpenStatus(){
    this.setState({
            isOpen: true
    });

}
    ChangeOnClosedStatus(){
        this.setState({
            isOpen: false
        });

    }

    render() {
        return (
            <React.Fragment>
                <button className="opnModal btn" onClick={this.ChangeOnOpenStatus}>Добавить</button>
                {
                    this.state.isOpen && <AddNewProduct close={this.ChangeOnClosedStatus}/>
                }
            </React.Fragment>
        );
    }
}

export default AddForm;