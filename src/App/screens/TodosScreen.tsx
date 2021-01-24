import React from "react";

import Button from "../components/Button";
import Item from "../components/Item";
import {Item as ItemType} from "../components/Item/types";
import "./todosScreen.css";

interface Props {
  status: "loading" | "ready";
  items: ItemType[];
  setOpenModal: () => void;
}

const TodosScreen: React.FC<Props> = ({status, items, setOpenModal}: Props) => {
  return (
    <div className="main-container">
      <div className="top-container">
        <h1>Supermarket List</h1>
        {items.length === 0 && <h2>No items</h2>}
        {items.length === 1 && <h2>One item</h2>}
        {items.length > 1 && <h2>{items.length} items</h2>}
      </div>
      {status === "loading" && <i className="bx bx-loader-circle bx-spin bx-lg" />}
      {status === "ready" && (
        <>
          <div className="todos-container animate__animated animate__fadeIn">
            <div className="todos-wrapper">
              {items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
              {items.length === 0 && (
                <>
                  <img src="assets/empty.png" style={{minWidth: "100px", maxWidth: "400px"}} />
                  <p>
                    Your list is empty.
                    <br />
                    Add things before you forget them.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="button-container animate__animated animate__bounceIn">
            <Button primary onClick={setOpenModal}>
              Add item
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodosScreen;
