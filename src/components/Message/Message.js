import React, { useState } from "react";
import "../Message/Message.css";
import Panel from "../sidePanel";
import "react-chat-elements/dist/main.css";
import { MessageList, ChatList } from "react-chat-elements";
import { IconButton } from "@material-ui/core";
import { MdSend } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

function Message(props) {
  const [messageList, setMessageList] = useState([""]);
  const [message, setMessage] = useState("");

  function addMessage() {
    setMessageList([
      ...messageList,
      { position: "left", type: "text", text: message, date: new Date() },
    ]);
    setMessage("");
  }

  return (
    <div className="dashboardMain">
      <Panel />
      <div className="rightContent" id="chatWrapper">
        <ChatList
          className="chatList"
          dataSource={[
            {
              avatar:
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
              alt: "Reactjs",
              title: props.selectedCenter,
              subtitle: "",
              date: new Date(),
              unread: 0,
            },
          ]}
        />
        <div className="messageWrapper">
          <MessageList
            className="messageList"
            lockable={true}
            dataSource={messageList}
          />
          <div className="chatInput">
            <form action="">
              <input
                placeholder="Type a message"
                id="messageInput"
                value={message}
                autoComplete="false"
                onChange={(event) => setMessage(event.target.value)}
              />
            </form>
            <IconButton id="sendButton" onClick={addMessage}>
              <MdSend />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
