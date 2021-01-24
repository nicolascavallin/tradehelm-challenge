import {Item as ItemType} from "../components/Item/types";

import firebase, {auth, db} from "./firebase";

export default {
  create: (item: ItemType): void => {
    db.collection("tradehelm")
      .doc(auth.currentUser?.uid as string)
      .update({
        items: firebase.firestore.FieldValue.arrayUnion(item),
      });
  },
  delete: (item: ItemType): void => {
    db.collection("tradehelm")
      .doc(auth.currentUser?.uid as string)
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(item),
      });
  },
};
