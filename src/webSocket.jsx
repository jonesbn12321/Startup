import React, { createContext, useContext, useEffect, useRef } from "react";

const WSContext = createContext(null);

export function WSProvider({ children }) {
  const [ws, setWS] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
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