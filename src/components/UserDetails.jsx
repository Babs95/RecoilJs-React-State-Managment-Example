import React from "react";
import { useRecoilValue } from "recoil";
import { currentUser } from "../atoms/user";

function UserDetails() {
  const user = useRecoilValue(currentUser);
  if (user === null) {
    return null;
  }
  return (
    <div>
      <h1>Profil utilisateur</h1>
      <ul>
        <li>Nom: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
}

export default UserDetails;
