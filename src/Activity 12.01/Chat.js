import React from 'react';
import './style.css';
import ChatWindow from "./ChatWindow";
import { useChatHook } from "./ChatHook";

const Chat = () => {
    const { state, dispatch } = useChatHook();
    const quit = () => dispatch({ type: "quit" });
    const join = () => dispatch({ type: "join" });
    return (
        <div className="App">
        <button onClick={join}>Add Chat Window</button>
        {state.isInChat && <ChatWindow close={quit} />}
        </div>
    );
};

export default Chat;