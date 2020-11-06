import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { currentUserId } from "../user";
import UserDetailSummary from "./UserDetailSummary";
//import { useRecoilValue } from "recoil";
//import { compteurDouble } from "../compteur";
//import Compteur from "./Compteur";
import UserList from "./UserList";

function Sidebar() {
  const selectedUser = useRecoilValue(currentUserId);
  //const n = useRecoilValue(compteurDouble);
  return (
    <div label="sidebar">
      {/* Compteur Sidebar: {n}
      <Compteur /> */}
      {/* <Compteur id="2"/> */}
      <h2>Liste des utilisateurs</h2>
      <UserList />
      {selectedUser !== null && <h2>Utlisateur courant</h2>}

      {selectedUser !== null && (
        <Suspense fallback="Loading....">
          <UserDetailSummary />
        </Suspense>
      )}
    </div>
  );
}

export default Sidebar;
