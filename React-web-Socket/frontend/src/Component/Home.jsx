import React, { useEffect, useState } from "react";
import SocketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

function Home() {
  const [content, setContent] = useState("");
  const [socket, setSocket] = useState(null);

  //fetch data from backend
  useEffect(() => {
    const s = SocketIOClient(ENDPOINT);
    s.on("recieve-update", (data) => {
      setContent(data);
    });
    setSocket(s);
  }, []);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    //send to backend
    if (socket) {
      socket.emit("update-content", newContent);
    }
  };

  return (
    <div>
      <textarea value={content} onChange={handleContentChange} />
    </div>
  );
}

export default Home;
