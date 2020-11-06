import { atom, atomFamily, selector } from "recoil";

export const compteurState = atom({
  key: "compteur-state",
  default: 0,
});

export const compteurDouble = selector({
  key: "compteur-double",
  get: ({ get }) => {
    const n = get(compteurState);
    return n * 2;
  },
});

export const compteurHash = selector({
  key: "compteur-hash",
  get: ({ get }) => {
    const n = get(compteurState);
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve(n + "hashed");
      }, 2000);
    });
  },
});

export const compteurStateFamily = atomFamily({
  key: "compteur-state-family",
  default: 0,
});
