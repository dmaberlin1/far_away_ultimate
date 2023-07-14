import React from 'react';
import initialItems from "../const/initialItems";
import Item from "./Item";

const PackingList = () => {
    return (
        <div className={'list'}>
        <ul>
            {initialItems.map((item) =>
                <Item key={item.id}
                      id={item.id} packed={item.packed}
                      description={item.description}
                      quantity={item.quantity}/>
            )}
        </ul>
        </div>
    );
};

export default PackingList;
