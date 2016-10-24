import React from 'react';
import {deleteTodo} from '../actions';
import apiProvider from '../apiProvider';

export default React.createClass({
    onClick(event) {
        event.preventDefault();
        console.log(this.props);
        var id = this.props.todoId;
        var store = this.props.store;
        apiProvider('/todos', 'delete', {id})
            .then(function (data) {
                store.dispatch(deleteTodo(data.id));
            });
    },

    render() {
        return (
            <input type="button" className="todo__delete-button" onClick={this.onClick}/>
        );
    }
});
