import React, { createContext, useContext, useEffect, useState } from "react";

const WSContext = createContext(null);

export function WSProvider({ children }) {
  const [ws, setWS] = useState(null);

  useEffect(() => {
    
    const socket = new WebSocket("wss://brooklyn-jones.click");
    setWS(socket);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <WSContext.Provider value={ws}>
      {children}
    </WSContext.Provider>
  );
}

export function useWS() {
  return useContext(WSContext);
}