/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function ThirdTest() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [mainValue, setMainValue] = useState("");
    const [displayValue, setDisplayValue] = useState("")

    const allCoins = () => {
        setLoading(true);
        try {
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
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
    const handliClick = () => {
        setDisplayValue(mainValue)
    }

    useEffect(allCoins, []);

    return (
        <div style={{ border: "2px solid blue", padding: "5px" }}>
                    <p style={{border:"1px solid", textAlign:"center"}}><strong>API Call,'SEARCH' button click search</strong></p>

            <h2 style={{ textAlign: "center" }}>Crypto Currency</h2>
            <input type="text" value={mainValue} onChange={e => (setMainValue(e.target.value))} style={{ margin: "5px" }}></input>
            <button onClick={handliClick}>Search</button>

            <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>

                {loading ? <p>Loading...</p> :  // Using Conditional Operator
                    posts.filter(posts=>{
                        return posts.name.toLowerCase().includes(displayValue.toLowerCase())
                    }).map(coin => (

                    <div key={coin.id} style={{ border: "1px solid white", padding: "10px", margin: "10px", width: "210px", backgroundColor: "black" }}>

                        <h3 style={{ textAlign: "center", color: "white" }}>{coin.name}</h3>
                        <p style={{ color: "white" }}>Symbol : {coin.symbol}</p>
                        <p style={{ color: "white" }}>Current Price : <strong>{coin.current_price}</strong></p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ThirdTest;