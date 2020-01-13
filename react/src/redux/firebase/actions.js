import { createAction } from "@reduxjs/toolkit";
// import { getStore } from "../../";
// import { db } from '../../fire';

export const reset = createAction("FIREBASE/RESET");
export const setChecked = createAction("FIREBASE/FINGERPRINT/SET");

export const checkFingerprint = (fingerprint) => {
  // const store = getStore();
  // const userEntity = store.getState().system.userEntity.data;
  
  // db.collection(`userEntities`).where(`fingerprint`, "==", fingerprint)
  //   .get()
  //   .then(function (querySnapshot) {
  //     let docId = null;
  //     querySnapshot.forEach(function (doc) {
  //       docId = doc.id;
  //     });
  //     if (!docId) {
  //       console.log('Add', userEntity);
  //       db.collection("userEntities").add(userEntity)
  //         .then(function (docRef) {
  //           console.log("Document written with ID: ", docRef.id);
  //         })
  //         .catch(function (error) {
  //           console.error("Error adding document: ", error);
  //         });
  //     } else {
  //       console.log('Set');
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });
};
