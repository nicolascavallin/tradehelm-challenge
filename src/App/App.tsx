import React, {useState, useEffect} from "react";

import {Item as ItemType} from "./components/Item/types";
import ModalScreen from "./screens/ModalScreen";
import TodosScreen from "./screens/TodosScreen";
import {auth, db} from "./services/firebase";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready">("loading");
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    auth.signInAnonymously().then((user) => {
      db.collection("tradehelm")
        .doc(user.user?.uid as string)
        .onSnapshot((doc) => {
          if (doc.exists) {
            setItems(doc.data()?.items as ItemType[]);
            setStatus("ready");
          } else {
            db.collection("tradehelm")
              .doc(user.user?.uid as string)
              .set({
                items: [],
              });
            setStatus("ready");
          }
        });
    });
  }, []);

  return (
    <>
      <TodosScreen
        items={items}
        openModal={openModal}
        setOpenModal={() => setOpenModal(true)}
        status={status}
      />
      {openModal && <ModalScreen setOpenModal={() => setOpenModal(false)} />}
    </>
  );
};

export default App;
