import React, { createContext, useContext, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";



const NavigationContext = createContext(null);

const useNavigationContext = () => {
    const context = useContext(NavigationContext);
    if (!context) {
      throw new Error("useNavigationContext must be used within a NavigationProvider");
    }
    return context;
  };

export const NavigationProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(props.initialBar);
  return (
    <NavigationContext.Provider value={{ isSidebarOpen, setIsSidebarOpen } }>
    <Nav/>
    <Sidebar/>
    </NavigationContext.Provider>
  );
};




export default useNavigationContext;
