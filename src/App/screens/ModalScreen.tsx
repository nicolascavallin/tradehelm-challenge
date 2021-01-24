import React, {SyntheticEvent, useEffect, useState} from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import api from "../services/api";

import "./modalScreen.css";

interface Props {
  setOpenModal: () => void;
}

const ModalScreen: React.FC<Props> = ({setOpenModal}: Props) => {
  const [close, setClose] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(false);

  const [value, setValue] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onClose = () => {
    setClose(true);
    setTimeout(() => {
      setOpenModal();
    }, 500);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim().length > 0 && !creating) {
      setCreating(true);
      setTimeout(() => {
        api.create({
          id: Date.now().toString(),
          title: value.trim(),
        });
        onClose();
      }, 1000);
    } else {
      setError(true);
    }
  };

  const onPressEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onPressEscKey);

    return () => {
      window.removeEventListener("keydown", onPressEscKey);
    };
  }, []);

  return (
    <div
      className={`overlay animate__animated animate__fadeIn ${
        close && "animate__fadeOut animate__faster"
      }`}
    >
      <div className="dialog animate__animated animate__bounceIn">
        <h2>Add item</h2>
        <form onSubmit={onSubmit}>
          <Input
            autoFocus
            autoComplete="off"
            name="item"
            placeholder="Type your item..."
            value={value}
            onChange={handleInputChange}
          />
          {error && <p className="p-alert">Please, type something...</p>}
          <div className="buttons">
            <Button type="button" onClick={onClose}>
              Not now
            </Button>
            <Button primary loading={creating} type="submit">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalScreen;
