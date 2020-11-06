import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserId, userState } from "../atoms/user";;

function UserList() {
  const [users, setUsers] = useState(null);
  const setUserState = useSetRecoilState(userState);
  const selectedUser = useRecoilValue(currentUserId);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) => setUsers(r));
  }, []);

  const handleClick = (user) => {
    setUserState((s) => ({ ...s, currentUser: user }));
  };
  if (users === null) {
    return "Loading....";
  }
  //onClick={() => handleClick(user.id)}

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => handleClick(user.id)}
          className={`list-group-item ${
            user.id === selectedUser ? "active" : ""
          }`}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
