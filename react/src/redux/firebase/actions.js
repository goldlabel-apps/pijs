import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import { db } from '../../fire';

export const reset = createAction("FIREBASE/RESET");
export const setChecked = createAction("FIREBASE/FINGERPRINT/SET");

export const checkFingerprint = (fingerprint) => {
  console.log(fingerprint)
  const store = getStore();
  // 
  db.collection(`userEntities`).where(`fingerprint`, "==", `loremipsum`)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.empty) {
        console.log ('fingerprint doesnt exist')
      }
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    })
    .finally(function () {
      store.dispatch({ type: "FIREBASE/FINGERPRINT/SET", checked: true });
    })

};
