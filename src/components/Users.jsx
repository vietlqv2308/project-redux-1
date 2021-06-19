import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux';

class Users extends Component {
    render() {
        const users = this.props.users;

        const elementUser = users.map((user, index,) => {
            return (
                <User
                    key={user.id}
                    user={user}
                    index={index}
                />
            );
        });

        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"></th>
                                <th className="text-center">Full Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {elementUser}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
};

export default connect(mapStateToProps)(Users);