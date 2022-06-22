import React from "react";
import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [nextID, setNextID] = useState(0);

  const nextIDHandler = () => {
    setNextID(nextID + 1);
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      //would prefer to make a user object class then create and pass that object to the list
      return [...prevUsersList, { name: uName, age: uAge, id: nextID }];
    });
    nextIDHandler();
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </div>
  );
}

export default App;
