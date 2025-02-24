/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function FifthTest() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showName, setShowName] = useState("");

    const usersDetail = () => {
        setLoading(true);
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setUsers(data);
                    setLoading(false);
                })
        }
        catch (error) {
            console.error("Fetching Error : ", error);
        }
    }
    useEffect(usersDetail, []);

    const handleClick = () =>{
        usersDetail()
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Users Detail</h2>
            <input type="text" onChange={e=> setShowName(e.target.value)} value={showName} style={{margin:"5px"}}/><br/>
            <button onClick={handleClick} style={{margin:"5px"}}>Refresh</button>
            <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
                {loading ? <p>Loading...</p> :
                    users.filter(users =>{
                        return users.name.toLowerCase().includes(showName.toLowerCase())
                    })
                    .map(user => (
                        <div key={user.id} style={{ border: "1px solid", margin: "10px", padding: "5px", width: "225px" }}>
                            <p>Name : {user.name}</p>
                            <p>E-mail : {user.email}</p>
                            <p>City : {user.address.city}</p>
                        </div>
                    ))};
            </div>
        </div>
    )
}


export default FifthTest;