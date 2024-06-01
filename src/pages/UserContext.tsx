import { ReactNode, createContext, useContext, useState } from "react";
import { user } from "./userInterface";
const GlobalContext = createContext<user | undefined | any>(undefined);

export function useGlobalContext() {
  return useContext(GlobalContext);
}
const AppContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState("");
  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
