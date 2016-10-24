import React from 'react';
import Form from './form';
import {createTodoOnClick} from '../javascript/todosOperations';
import {onTouch, onTodoSwipe} from '../touches';
import TodosContainer from './todosContainer';

export default React.createClass({
    render() {
        var store = this.props.store;
        return (
            <div>
                <div className="refresh-container">
                    <img class="refresh-image"
                        src="http://www.processrefresh.com/images/logo.png"/>
                </div>
                <TodosContainer store={store}/>
            </div>
        );
    }
});
