import React from 'react';
import {addFlight} from '../actions';

export default ({store}) => {
    return <form className="flight__form" method="post">
        <input type="text" name="text"/>
        <input type="submit"/>
    </form>
}