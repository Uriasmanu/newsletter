// index.jsx
import React, { createContext, useState } from "react";

const ShowCardContext = createContext();

export const ShowCardProvider = ({ children }) => {
  const [showCard, setShowCard] = useState(true);

  return (
    <ShowCardContext.Provider value={{ showCard, setShowCard }}>
      {children}
    </ShowCardContext.Provider>
  );
};

export default ShowCardContext;
