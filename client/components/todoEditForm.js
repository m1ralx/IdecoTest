import React from 'react';
import {addTodo} from '../actions';
import apiProvider from '../apiProvider';


export default React.createClass({
    render() {
        return (
            <input type="text" className="todo__edit-form"/>
        );
    }
});
