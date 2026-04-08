import React, { createContext, useContext, useEffect, useRef } from "react";

const WSContext = createContext(null);

export function WSProvider({ children }) {
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  return (
    <WSContext.Provider value={wsRef.current}>
      {children}
    </WSContext.Provider>
  );
}

export function useWS() {
  return useContext(WSContext);
}