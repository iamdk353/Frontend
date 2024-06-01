import { ReactNode, createContext, useContext, useState } from "react";

import userState from "../interface/userState";

const userContext = createContext<userState | undefined | any>(undefined);

const UserData = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | undefined>();
  return (
    <userContext.Provider value={{ userId, setUserId }}>
      {children}
    </userContext.Provider>
  );
};

export const useGlobalUser = () => useContext(userContext);

export default UserData;
