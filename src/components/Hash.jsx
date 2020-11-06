import React from "react";
import { useRecoilValue } from "recoil";
import { compteurHash } from "../atoms/compteur";

function Hash() {
  const hash = useRecoilValue(compteurHash);
  return (
    <div>
      <h1> Compteur Hashé </h1>
      <p> {hash} </p>
    </div>
  );
}

export default Hash;
