import React from 'react';
import './style.css';

const Stock = () =>{
    const [stock, setStock] = React.useState(["initial item"]);

    const addStock = () =>{
        setStock(prevStock =>{
            let newItem = "new item";
            console.log(newItem);
            // prevStock.push(newItem);

            // console.log(Object.is(prevStock,stock));
    
            return [...prevStock,"New Item"];
        });
    };

    return(
        <div className="App">
            <p>Stock</p>
            {stock.map((s, i) => (
            <p key={i}>{i}. {s}</p>
            ))}
            <button onClick={addStock}>Add new item</button>
        </div>
    );
};

export default Stock;