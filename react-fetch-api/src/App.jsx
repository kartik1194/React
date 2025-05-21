import { useState, useEffect } from "react";
import { getPosts } from "./api";
import PostCard from "./components/PostCard";

import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {/* {data ? data.map((e) => <li>{e.body}</li>) : <div>no data</div>} */}
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <div>no data</div>
      )}
    </div>
  );
}

export default App;
