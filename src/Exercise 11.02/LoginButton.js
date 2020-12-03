import React from "react";
import './style.css';

const LoginButton = () =>{
    let [loggedIn, setLoggedIn] = React.useState(false);
    const loggedInOnClick =() => setLoggedIn(!loggedIn);

    React.useEffect(() => {
        const loggedInFromLocalStorage = localStorage.getItem("loggedIn");
      
        if (JSON.parse(loggedInFromLocalStorage) === true) {
          setLoggedIn(true);
        }
    }, []);

    React.useEffect(()=>{
        localStorage.setItem("loggedIn", loggedIn);
    }, [loggedIn]);

   return(
    <div className="App">
    <p>{loggedIn ? 'Welcome Back!' : 'Logged Out'}</p>
    <button onClick={loggedInOnClick}>{loggedIn ? 'Logged Out':'Logged In' }</button>
    </div>
   );
};

export default LoginButton;