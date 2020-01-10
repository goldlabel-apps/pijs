import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import { db } from '../../fire';

export const reset = createAction("FIREBASE/RESET");
export const callbackOne = createAction("FIREBASE/ASYNCTHING/COMPLETE");

export const doAsyncThing = () => {

  console.log('Read a firestore table');

  db.collection("userEntities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });

  const store = getStore();
  store.dispatch({ type: "FIREBASE/ASYNCTHING/COMPLETE" });
  
};
