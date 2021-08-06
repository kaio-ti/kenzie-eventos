import { createContext, useContext, useState } from "react";

export const ConfraContext = createContext([]);

export const ConfraProvider = ({ children }) => {
  const [confraList, setConfraList] = useState([]);

  const addToConfra = (drink) => {
    if (!confraList.find((item) => item.name === drink.name)) {
      setConfraList([...confraList, drink]);
    }
  };

  const removeFromConfra = (drink) => {
    const filteredConfra = confraList.filter(
      (item) => item.name !== drink.name
    );
    setConfraList(filteredConfra);
  };

  return (
    <ConfraContext.Provider
      value={{ confraList, setConfraList, addToConfra, removeFromConfra }}
    >
      {children}
    </ConfraContext.Provider>
  );
};
export const useConfra = () => useContext(ConfraContext);
