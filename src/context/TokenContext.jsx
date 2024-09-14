import React, { createContext, useState, useContext } from 'react';

const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken')); 

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
