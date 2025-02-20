import React, { useState, useEffect } from "react";

function SecondTest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ mainValue, setMainValue] = useState("");

  const fetchPosts = () => {
    setLoading(true);
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          return response.json()
        }
        ).then(data => {
          setPosts(data)
          setLoading(false)
        })

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Posts from API</h2>
      <input type="text" value={mainValue} onChange={e=>setMainValue(e.target.value)}/>
      {loading ? <p>Loading...</p> :
        posts.filter(posts => {
          return posts.title.toLowerCase().includes(mainValue.toLowerCase())
        }).map(post => {
          <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        })
      }
    </div>
  );
}

export default SecondTest;