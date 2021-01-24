import React, { Component } from 'react';
import {AuthService, AuthContext} from './AuthService'
import Address from './Address'
import Settings from "./Settings";

const ShoppingCartContext = React.createContext();

const ShoppingCartProvider = props => {
   const[items, setitems] = React.useState([
    { name: "desk", price: 4 },
    { name: "chair", price: 9 },
    { name: "lamp", price: 3 }
   ]);

   return (
        <ShoppingCartContext.Provider value={[items,setitems]}>
           {props.children}
        </ShoppingCartContext.Provider>
   );
};

const Checkout = props => {
    const user = React.useContext(AuthContext);
    const mainAddress = user && user.addresses 
            ? user.addresses.find(address => !!address.main)
    : null;
    return (
    <div
    style={{
    border: "3px solid black",
    padding: 5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "100%"
    }}
    >
    {mainAddress ? <Address {...mainAddress} /> : "No addresses found!"}
    <Pay />
    </div>
    );
};

const Pay = props => {
    const [items, setItems] = React.useContext(ShoppingCartContext);
  
    let totalPrice = 0;
  
    items.forEach(item => {
      totalPrice = totalPrice + item.price;
    });
  
    return (
      <>
        <div style={{ margin: "8px 0" }}>Total price £{totalPrice}</div>
        <button
          title="Pay now"
          onClick={() => {
            props.createTransaction(totalPrice);
            setItems([]);
          }}
        >
          Pay now
        </button>
      </>
    );
  };

  const Cart = () => {
      return (
        <div
        style={{
        border: "3px solid black",
        padding: 5,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "100%"
        }}
        >
            <Items />
        </div>
      );
  };

  const Item = props => {
      return (
          <div
          className="Item"
          style={{
              display:"flex",
              justifyContent:"space-between"
          }}>
              <p>{props.name} : {props.price}</p>
              <button onClick={() => props.delete(props.name)}>Remove from Cart</button>
          </div>
      );
  };

  const Items = props => {
    const [items, setItems] = React.useContext(ShoppingCartContext);
    return items.map(item =>{
        return  <Item
        key={item.name}
        name={item.name}
        price={item.price}
        delete={() => {
          setItems(prevItems => {
          return prevItems.filter(i => i.name !== item.name);
          });
        }}
        />
    });
  };

const ShoppingCartApp = () => {
    const createTransaction = amount => {
        if (amount !== 0) alert("transaction was created with " + amount);
        };
        return (
        <AuthService>
            <ShoppingCartProvider>
            <div
            className="App"
            style={{ display: "flex", justifyContent: "space-between" }}
            >
            <Cart /> 
            <Checkout createTransaction={createTransaction} />
            </div>
            <Settings/>
            </ShoppingCartProvider>
        </AuthService>
        );
  };
  export default ShoppingCartApp;