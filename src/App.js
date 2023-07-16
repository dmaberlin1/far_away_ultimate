import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([]);
    const itemsLength=items.length
    // let itemsPacked=items.reduce((count,item)=>{
    //     if(item.packed ===true){
    //         return count+1;
    //     }
    //     return count
    // },0)
    let itemsPacked=items.filter(item=>item.packed).length
    let percentage=Math.round((itemsPacked/itemsLength)*100)
    function handleAddItems(item) {
        setItems((items)=>[...items,item])
    }

    function handleDeleteItem(id) {
        setItems(items=>items.filter(item=>item.id !==id))
    }

    function handleToggleItem(id) {
        setItems(items=>items.map(item=>item.id ===id ? {...item,packed: !item.packed}:item))
    }
    function handleClearList() {
        const confirmed=window.confirm('Are you sure want to delete all items?')
        if(confirmed) setItems([])
    }

    return (
    <div className="app">
      <Logo/>
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}
                   handleToggleItem={handleToggleItem}
                   handleClearList={handleClearList}
                   handleDeleteItem={handleDeleteItem}/>
      <Stats itemsLength={itemsLength} itemsPacked={itemsPacked} percentage={percentage}/>
    </div>
  );
}

export default App;
