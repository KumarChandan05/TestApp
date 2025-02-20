import React, { useState, useEffect } from "react";

function Test() {
  const [posts, setPosts] = useState([]);
  const [srcValue, setSrcValue] = useState("")
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
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
      <div>
        <h2>Posts from API</h2>
        <input
          type="text"
          value={srcValue}
          onChange={e => setSrcValue(e.target.value)}
          style={{ height: "20px", width: "150px" }}
        />
      </div>
      <div>
        {loading ? <p>Loading...</p> :
          posts.filter(post => {
            return post.title.toLowerCase().includes(srcValue.toLowerCase())
          }).map(post => (
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
