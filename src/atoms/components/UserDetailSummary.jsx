import React from "react";
import { useRecoilValue } from "recoil";
import { currentUser } from "../user";

function UserDetailSummary() {
  const user = useRecoilValue(currentUser);
  return <div>Nom: {user.name}</div>;
}

export default UserDetailSummary;
