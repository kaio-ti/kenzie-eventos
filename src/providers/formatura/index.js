import { createContext, useContext, useState } from "react";

export const FormaturaContext = createContext([]);

export const FormaturaProvider = ({ children }) => {
  const [formaturaList, setFormaturaList] = useState([]);

  const addToFormatura = (drink) => {
    if (!formaturaList.find((item) => item.name === drink.name)) {
      setFormaturaList([...formaturaList, drink]);
    }
  };

  const removeFromFormatura = (drink) => {
    const filteredFormatura = formaturaList.filter(
      (item) => item.name !== drink.name
    );
    setFormaturaList(filteredFormatura);
  };

  return (
    <FormaturaContext.Provider
      value={{
        formaturaList,
        setFormaturaList,
        addToFormatura,
        removeFromFormatura,
      }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
export const useFormatura = () => useContext(FormaturaContext);
