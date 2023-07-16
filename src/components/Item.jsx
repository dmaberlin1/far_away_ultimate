import React from 'react';

const Item = ({id,description,quantity,packed,handleDeleteItem,handleToggleItem}) => {
    return (
        <li>

            <input type="checkbox" value={packed} onChange={()=>handleToggleItem(id)} />
            <span style={packed ? {textDecoration:"line-through"}:{}}>
                {quantity}  {description}
            </span>
            <button onClick={()=>handleDeleteItem(id)}>&times;</button>
        </li>
    );
};

export default Item;
