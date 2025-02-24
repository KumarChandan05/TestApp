// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function SecondTest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mainValue, setMainValue] = useState("");



  const fetchPosts = () => {
    setLoading(true);
    try {
      fetch("https://fakestoreapi.com/products")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setPosts(data);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };



  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "5px" }}>
      <p style={{ border: "1px solid", textAlign: "center" }}><strong>API call, search</strong></p>
      <h2>Posts from API</h2>
      <input type="text" value={mainValue} onChange={e => setMainValue(e.target.value)} />

      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        {loading ? (<p>Loading...</p>) : (
          posts.filter(posts => {  // Using Conditional Operator
            return posts.title.toLowerCase().includes(mainValue.toLowerCase())
          })
            .map(post => (
              <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px", height: "350px", width: "400px" }}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default SecondTest;
