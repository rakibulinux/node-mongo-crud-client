import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  console.log(users);
  const handleDelete = (user) => {
    const agree = window.confirm(`Are you sure to delete ${user.name} user?`);
    console.log(agree);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User deleted successfully.");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h1>I am from home {displayUsers.length}</h1>
      {displayUsers.map((user) => (
        <p key={user._id}>
          <span>{user.name} </span>
          <span>{user.email}</span>
          <Link to={`/update/${user._id}`}>
            <button type="submit">Update</button>
          </Link>
          <button onClick={() => handleDelete(user)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
