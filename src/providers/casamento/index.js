import { createContext, useContext, useState } from "react";

export const CasamentoContext = createContext([]);

export const CasamentoProvider = ({ children }) => {
  const [casamentoList, setCasamentoList] = useState([]);

  const addToCasamento = (drink) => {
    if (!casamentoList.find((item) => item.name === drink.name)) {
      setCasamentoList([...casamentoList, drink]);
    }
  };

  const removeFromCasamento = (drink) => {
    const filteredCasamento = casamentoList.filter(
      (item) => item.name !== drink.name
    );
    setCasamentoList(filteredCasamento);
  };

  return (
    <CasamentoContext.Provider
      value={{
        casamentoList,
        setCasamentoList,
        addToCasamento,
        removeFromCasamento,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
export const useCasamento = () => useContext(CasamentoContext);
