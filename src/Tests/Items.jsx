/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function Test() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setPosts(data)
          setLoading(false)
        })

    } catch (error) {
      console.error("Error fetching posts:", error);
    }

  };

  const IamTheFirstarg = () => {
    fetchPosts()
  }
  useEffect(IamTheFirstarg, []);

  return (
    <div style={{ border: "2px solid black", padding: "5px" }}>
      <div>
        <p style={{border:"1px solid", textAlign:"center"}}>API Call</p>
        <h2>Posts from API</h2>
      </div>
      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        {loading ? <p>Loading...</p> :  // Using Conditional Operator
          posts.map(post => (
            <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px", height: "200px", width: "400px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Test;
