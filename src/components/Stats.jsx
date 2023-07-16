import React from 'react';

const Stats = ({itemsLength, itemsPacked, percentage}) => {
    if (!itemsLength) return (<p className={'stats'}>
        <em>
            Start adding some items to your packing list
        </em>
    </p>)

    return (
        <footer className={'stats'}>
            <em>
                {percentage === 100 ? 'You got everything!Ready to go'
                    : `You have ${itemsLength} items on your list, and you already packed 
                    ${itemsPacked} (${percentage}%)`
                }
            </em>
        </footer>
    );
};

export default Stats;
