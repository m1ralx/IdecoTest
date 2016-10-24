import React from 'react';
import {addTodo} from '../actions';

export default ({store}) => {
    return <form className="flight__form" method="post">
        <input type="text" name="text"/>
        <input type="submit"/>
    </form>;
};
