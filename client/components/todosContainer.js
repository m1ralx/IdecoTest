import React from 'react';
import {onTouch, pullAndRefresh} from '../touches';
import {createTodoOnClick} from '../javascript/todosOperations';
import Todo from './todo';

export default React.createClass({
    componentDidMount() {
        onTouch(this.refs.todosContainer, pullAndRefresh);
    },
    render() {
        var store = this.props.store;
        return (
            <div ref="todosContainer" className="todos-container">
                {
                    store.getState().todos
                        .map(todo => <Todo
                            store={store}
                            todo={todo}
                            key={todo.id}
                        />)
                }
                <div className="todo-item">
                    <input type="text" className="todo__create-form"/>
                    <input type="button" className="todo__submit-button"
                        onClick={createTodoOnClick.bind(this, store)}/>
                </div>
            </div>
        );
    }
});
