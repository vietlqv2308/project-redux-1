import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class User extends Component {
    
    onDeleteUser = () => {
        const {user} = this.props;
        this.props.onDeleteUser(user.id);
    }

    onEditUser = () => {
        const {user} = this.props;
        this.props.onEditUser(user);
    }

    render() {
        
        const { user, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onEditUser}
                    >
                        Edit
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteUser}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteUser: (id) => {
            dispatch(actions.deleteUser(id))
        },

        onEditUser: (user) => {
            dispatch(actions.editUser(user));
            dispatch(actions.isOpenForm());
        }
    }
}

export default connect(null,mapDispatchToProps)(User);