import React, {useState} from 'react';
import { uid } from 'uid';

let getId=uid(16)
const Form = ({handleAddItems}) => {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);


    function handleSubmit(e){
            e.preventDefault()
        if(!description) return;

        const newItem={
            description,quantity,packed:false, id:getId
        }
        handleAddItems(newItem)
        setDescription('')
        setQuantity(1)
    }

    return (
        <form className={'add-form'} onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select name="quantity" id="quantity" value={quantity}
                    onChange={e=>setQuantity(Number(e.target.value))}>
                {Array.from({length:20},(_,i)=>i+1).map(num=>
                    <option value={num} key={num}>
                        {num}
                    </option>)
                }
            </select>
            <input type="text" placeholder={'Item...'} value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <button type={"submit"}>Add</button>
        </form>
    );
};

export default Form;
