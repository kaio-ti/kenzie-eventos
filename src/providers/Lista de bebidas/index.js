import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";

export const BeveragesContext = createContext([]);

export const BeveragesProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const getBeverages = () => {
    api
      .get("/beers")
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBeverages();
  }, []);

  return (
    <BeveragesContext.Provider value={{ list, getBeverages }}>
      {children}
    </BeveragesContext.Provider>
  );
};
export const useBevarage = () => useContext(BeveragesContext);
