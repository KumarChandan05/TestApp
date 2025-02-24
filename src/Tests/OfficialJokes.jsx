/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function FourthTest() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAns, setShowAns] = useState("");

    const jokes = () => {
        setLoading(true);
        try {
            fetch("https://official-joke-api.appspot.com/random_joke")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setPosts(data);
                    setLoading(false);
                });
        }
        catch (error) {
            console.error("Error Fetching:", error);
        }
    };

    useEffect(jokes, []);

    const handleClick = () =>{
        setShowAns((posts.punchline))
    }
    const clearAndReloadPage=()=>{
        setShowAns("");
        jokes();
    }
    
    const clearvalue =()=>{
        setShowAns("");
    }

    return (
        <div style={{ border: "2px solid blue", padding: "5px" }}>
            <p style={{border:"1px solid", textAlign:"center"}}><strong>API Call, 'SHOW' button click show answer,'HIDE' button click hide answer, 'NEXT' button click page reload and clear answer</strong></p>
            <h2>Jokes</h2>
            {loading ? <p>Loading...</p> : ( //Using Conditional Operator
                <div key={posts.id}>
            <p>Type : <strong>{posts.type}</strong></p>
            <p>Question : <strong>{posts.setup}</strong></p>
            <button onClick={handleClick}>Show</button>
            <button onClick={clearvalue}>Hide</button>
            <p>Answer : {showAns}</p>
            <button onClick={clearAndReloadPage}>Next</button>

        </div>
            )}
        </div >
    )
}

export default FourthTest;
