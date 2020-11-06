import React from "react";
import { useRecoilState } from "recoil";
import { compteurState } from "../atoms/compteur";

function Compteur() {
  const [n, setN] = useRecoilState(compteurState);
  //const [n, setN] = useRecoilState(compteurStateFamily(id));
  return (
    <div label="button">
      <button classNale="btn btn-primary" onClick={() => setN((n) => n + 1)}>
        Compteur {n}
      </button>
    </div>
  );
}

export default Compteur;
