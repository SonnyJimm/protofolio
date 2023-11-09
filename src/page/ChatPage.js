import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ChatPage = () => {
  const [converstation, setConversation] = useState([
    { type: "gpt", message: "Hello what question do you for me today" },
  ]);
  const [input, setInput] = useState("");
  const [isLoadin, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let id = localStorage.getItem("id");
  //     if (id) {
  //       // console.log(id)
  //       try {
  //         const res = await fetch(
  //           "https://9htulh0fpg.execute-api.us-east-1.amazonaws.com/api/chat?id=" +
  //             id
  //         );
  //         const body = await res.json();
  //         setConversation([...converstation, ...body]);
  //       } catch (e) {
  //         // console.log(e)
  //         localStorage.removeItem("id");
  //       }
  //     }
  //   };
  //   fetchData();
  // }, []);
  const updateInput = (val) => {
    setInput(val);
  };
  const sendChat = () => {
    setLoading(true);
    (async () => {
      try {
        let id = localStorage.getItem("id");
        const headers = {
          "Content-Type": "application/json",
        };
        if (id) {
          headers["previous"] = id;
        }
        const res = await fetch(
          "https://9htulh0fpg.execute-api.us-east-1.amazonaws.com/api/chat",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ data: input }),
          }
        );
        const body = await res.json();
        setConversation([
          ...converstation,
          { type: "user", message: input },
          { type: "gpt", message: body.message },
        ]);
        localStorage.setItem("id", body.id);
        setInput("");
      } catch (e) {
        setOpen(true);
      } finally {
        setLoading(false);
      }
    })();
  };
  return (
    <div className="page-wrapper">
      <h1 className="page-header">Chat-gpt plugin</h1>
      <p className="page-form-insight">
        This is lambda function sending the input to chat-gpt. I have given a
        small background of myself to chat-gpt and if you have some questions
        about my experience feel free to ask here or you can ask through
        directly through the contact page or through LinkedIn
      </p>
      <div className="page-form-chat">
        {converstation.map((content, id) => {
          return content.type === "gpt" ? (
            <div className="chat-gpt" key={id * 30}>
              <div className="dialog">{content.message}</div>
            </div>
          ) : (
            <div className="chat-user" key={id * 30}>
              <div className="dialog-user">{content.message}</div>
            </div>
          );
        })}
      </div>
      <div className="input-box">
        <textarea
          className="input-txts"
          value={input}
          onChange={(e) => {
            updateInput(e.target.value);
          }}
        ></textarea>
        <button
          className="send"
          disabled={isLoadin || input.length > 2000 || input.length === 0}
          onClick={sendChat}
        >
          Send
        </button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={"error"} sx={{ width: "100%" }}>
          Error occured while sending data to api
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ChatPage;
