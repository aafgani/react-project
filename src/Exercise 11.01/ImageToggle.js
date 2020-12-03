import React from "react";
import './style.css';

const ImageToggle = () =>{
    const url = "https://images.unsplash.com/photo-1562051036-e0eea191d42f";
    const [displayImage, setState]= React.useState(false);
    const toggleImage = () => setState(!displayImage);
    return(
        <div className="App">
            {displayImage && <img src={url} alt="some coffee beans"/>}
            <br/>
            <button onClick={toggleImage}>Toggle image display</button>
        </div>
    );
};

export default ImageToggle;