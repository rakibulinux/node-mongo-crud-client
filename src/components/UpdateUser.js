import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  const handleUpdateuser = (e) => {
    e.preventDefault();
    console.log(user);
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h1>I am Update {storedUser.name}</h1>
      <form onSubmit={handleUpdateuser}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={storedUser.name}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="Address"
          defaultValue={storedUser.address}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={storedUser.email}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
