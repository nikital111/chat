import React from "react";
import "./UsersInRoom.css";

export const UsersInRoom = ({ users }) => {
  let listOfUsers = users.map((user, i) => {
    console.log(user);
    return <li key={i}>{user.name}</li>;
  });

  return (
    <div id="users">
      <li>Users online:</li>
      <hr></hr>
      {listOfUsers}
    </div>
  );
};
