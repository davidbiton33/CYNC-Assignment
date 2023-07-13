import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling"],
});

function App() {
  const [messageValue, setMessageValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleMessageSend = () => {
    if (messageValue === "") {
      return setResponse("do not send empty message");
    }
    setLoading(true);
    socket.emit("new-message-from-client", messageValue);
  };

  useEffect(() => {

    socket.on("connect", () => {
      console.log("client connect to socket (microservice A)");
    });

    socket.on("send-response-to-the-client", (response) => {
      setResponse(response);
      setMessageValue("");
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="write some text..."
          value={messageValue}
          onChange={(e) => {
            setResponse(null);
            setMessageValue(e.target.value);
          }}
        />
        <button onClick={handleMessageSend}>
          {loading ? <span className="loader"></span> : "save"}
        </button>
      </div>
      <div>{response ? <span>{response}</span> : null}</div>
    </div>
  );
}

export default App;
