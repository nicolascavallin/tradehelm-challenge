import React, {useState} from "react";

import api from "../../services/api";

import "./itemButton.css";
import {Item as ItemType} from "./types";

interface Props {
  item: ItemType;
}

const ItemButton: React.FC<Props> = ({item}: Props) => {
  const [deleting, setDeleting] = useState(false);

  const onDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      // firestore elimina inmediatamente, el delay es para dar una sensación más suave
      api.delete(item);
    }, 1000);
  };

  return (
    <button className="item-button" disabled={deleting} onClick={onDelete}>
      {!deleting && <span>delete</span>}
      {deleting && <i className="bx bx-loader-circle bx-spin bx-lg" />}
    </button>
  );
};

export default ItemButton;
