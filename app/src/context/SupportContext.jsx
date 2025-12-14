import { createContext, useContext, useState } from "react";

const SupportContext = createContext();

export function SupportProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  const raiseTicket = (ticket) => {
    const newTicket = {
      id: "TCK" + Date.now(),
      ...ticket,
      date: new Date().toLocaleString(),
      status: "Open",
    };
    setTickets((prev) => [...prev, newTicket]);
    return newTicket;
  };

  return (
    <SupportContext.Provider value={{ tickets, raiseTicket }}>
      {children}
    </SupportContext.Provider>
  );
}

export const useSupport = () => useContext(SupportContext);
