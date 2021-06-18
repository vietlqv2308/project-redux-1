import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";

class AddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            fullName: "",
            email: ""
        }

        this.fullName = React.createRef();
        this.email = React.createRef();
    }

    onAddUser = (event) => {
        event.preventDefault();

        const fullName = this.fullName.current.value;
        const email = this.email.current.value;

        if (this.props.isEditing && this.props.isEditing.id) {
            const newUser = {
                id: this.props.isEditing.id,
                fullName: fullName,
                email: email
            }
            this.props.onAddUser(newUser);
        }
        else {
            const newUser = {
                fullName: fullName,
                email: email
            }
            this.props.onAddUser(newUser);
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        const isEditing = this.props.isEditing;

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Add User</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Full Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                ref={this.fullName}
                                required
                                onChange={this.onChange}
                                defaultValue={isEditing.fullName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                ref={this.email}
                                required
                                onChange={this.onChange}
                                defaultValue={isEditing.email}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={this.onAddUser}
                            >
                                Add
                            </button>
                            &nbsp;
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={this.onCloseForm}>
                                Exit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        isEditing: state.isEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
return {
        onCloseForm: () => {
            dispatch(actions.isCloseForm());
        },
        
        onAddUser: (user) => {
            dispatch(actions.addUser(user));
            dispatch(actions.isCloseForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);