import React from "react";

function Start(props) {
    return ( 
        <main className="start">
            <div>
            <h1>Quizzical</h1>
            <p>General culture quiz</p>
            <button onClick={props.hide}>Start quiz</button>
            </div>
        </main>
     );
}

export default Start;