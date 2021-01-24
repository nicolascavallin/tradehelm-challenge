import React from "react";

import ItemButton from "./ItemButton";
import "./item.css";
import {Item as ItemType} from "./types";

interface Props {
  item: ItemType;
}

const Item: React.FC<Props> = ({item}: Props) => {
  return (
    <div className="item-container animate__animated animate__fadeIn">
      <p className="item-text">{item.title}</p>
      <ItemButton item={item} />
    </div>
  );
};

export default Item;
