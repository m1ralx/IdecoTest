import React from 'react';
import {editTodoOnClick} from '../javascript/todosOperations';
import {createTodoOnClick} from '../javascript/todosOperations';
import {showEditForm} from '../javascript/todosOperations';
import SubmitButton from './submitButton';
import TodoEditForm from './todoEditForm';
import DeleteButton from './deleteButton';
import {onTouch, onTodoSwipe} from '../touches';

export default React.createClass({
    componentDidMount() {
        onTouch(this.refs.todoItem, onTodoSwipe);
    },
    render()
    {
        var store = this.props.store;
        var todo = this.props.todo;
        return (
            <div className="todo-item">
                <input type="checkbox" className="todo__edit-checkbox"
                    id={"edit-checkbox-" + todo.id}/>
                <label ref="todoItem" className="todo__text" htmlFor={"edit-checkbox-" + todo.id}
                    onClick={showEditForm}>{todo.text}</label>
                <DeleteButton store={store} todoId={todo.id}/>
                <TodoEditForm store={store}/>
                <SubmitButton store={store} todoId={todo.id}/>
            </div>
        );
    }
});
