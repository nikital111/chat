import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { InfoBar } from "../InfoBar/InfoBar";
import { Input } from "../Input/Input";
import { Messages } from "../Messages/Messages";
import { UsersInRoom } from "../UsersInRoom/UsersInRoom";
import "./Chat.css";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("getUsers", (e) => {
      console.log(e.dataUsers);
      setUsers(e.dataUsers, ...users);
    });
  }, [users]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
      e.target.value = "";
    }
  };
  //console.log(message, messages);
  return (
    <div className="outContainer">
      <UsersInRoom users={users} />
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
