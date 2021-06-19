import React, { Component } from "react";
import Users from "./components/Users";
import AddForm from "./components/AddForm";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import "./App.css";

class App extends Component {

    onToggleForm = () => {
        this.props.onToggleForm();
    }

    componentDidMount() {
        this.props.getUsersRequest();
    }

    render() {
        const isDisplayForm = this.props.isDisplayForm;
        const elementForm = isDisplayForm && <AddForm />

        return (
            <div className="container">
                <div className="text-center">
                    <h1>List</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={
                        isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
                    }>
                        {elementForm}
                    </div>
                    <div className={
                        isDisplayForm === true ?
                            "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
                            "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    }>
                        <button
                            type="button"
                            className="btn btn-primary mb-15"
                            onClick={this.onToggleForm}>
                            {isDisplayForm ? "Close Form" : "Add Form"}
                        </button>
                        <Users />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleForm: () => {
            dispatch(actions.isToogleForm());
        },
        getUsersRequest: () => {
            actions.getUsersRequest(dispatch);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
