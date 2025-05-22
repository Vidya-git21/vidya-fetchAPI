import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./assets/postSlice";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {status === "failed" && <p>Error loading posts.</p>}
    </div>
  );
}

export default App;
