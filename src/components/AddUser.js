import React, { useState } from "react";

const AddUser = () => {
  const [users, setUsers] = useState({});

  const handleAdduser = (e) => {
    e.preventDefault();
    console.log(users);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    setUsers(newUser);
  };
  console.log(users);
  return (
    <div>
      <h1>Please add a new user</h1>
      <form onSubmit={handleAdduser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="Address"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="email"
          placeholder="Email"
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
