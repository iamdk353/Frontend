import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the type for the context value
interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
const GlobalUser = createContext<UserContextType | undefined>(undefined);

//using global context hook
export default function useUser() {
  return useContext(GlobalUser);
}

// Define the provider component
const UserContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("he;;;o");
  const sharedData = {
    user,
    setUser,
  };

  return (
    <GlobalUser.Provider value={sharedData}>{children}</GlobalUser.Provider>
  );
};
export { UserContext };
