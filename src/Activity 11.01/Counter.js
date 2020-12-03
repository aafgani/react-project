import React from 'react';

const useLogger = (value) => {
    React.useEffect(()=>{
        console.log("Value changed:", value);
    }, [value]);
};

const useCounter = (initialValue) =>{
    const [value, setValue] = React.useState(initialValue);
    const increment = () => setValue(value+1);
    const decrement = () => setValue(value-1);
    const reset = () => setValue(0);

    return { value, increment, decrement, reset };
};

const CounterComponent = (props) =>{
    const { value, increment, decrement, reset } = useCounter(props.initialValue);
    useLogger(value);
    return (
        <CounterView 
            increment={increment}
            decrement={decrement}
            value={value}
            reset={reset}>

        </CounterView>
    );
};

const CounterView = (props) => (
    <div className="CounterView">
        <div>The current value is: {props.value}</div>
        <div>
        <button onClick={props.increment}>Click here to increment it</button>
        <button onClick={props.decrement}>Click here to decrement it</button>
        <button onClick={props.reset}>Click here to reset</button>
        </div>
    </div>
);

const Counter = () => {
    return(
        <div className="App">
            <h1>Counter</h1>
            <CounterComponent initialValue={5}></CounterComponent>
        </div>
    );
};

export default Counter;