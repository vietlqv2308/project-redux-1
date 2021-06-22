import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

class AddForm extends Component {

    constructor(props) {
        super(props)
        this.fullName = React.createRef();
        this.email = React.createRef();
    }

    onAddUser = (event) => {
        event.preventDefault();
        const { fullName, email } = this.props.isEditing;
        let newUser = {
            fullName,
            email,
        };
        if (this.props.isEditing && this.props.isEditing.id) {
            newUser = {
                id: this.props.isEditing.id,
                fullName,
                email,
            }
        }

        this.props.onAddUser(newUser);
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        this.props.onChange({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { isEditing } = this.props;
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
                                value={isEditing.fullName || ""}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={isEditing.email || ""}
                                onChange={this.onChange}
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
        isDisplayForm: state.user.isDisplayForm,
        isEditing: state.user.isEditing
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseForm: () => {
            dispatch(actions.isCloseForm());
        },

        onChange: (data) => {
            dispatch(actions.onChange(data));
        },

        onAddUser: (user) => {
            if (user.id) {
                actions.updateUserRequest(user, dispatch);
                actions.getUsersRequest(dispatch);
            } else {
                actions.createUserRequest(user, dispatch);
                actions.getUsersRequest(dispatch);
            }
            dispatch(actions.isCloseForm());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);