import React from 'react';

const Item = ({id,description,quantity,packed}) => {
    return (
        <li>
            {' '}
            <span style={packed ? {textDecoration:"line-through"}:{}}>
                {quantity}  {description}</span>
            <button>&times;</button>
        </li>
    );
};

export default Item;
