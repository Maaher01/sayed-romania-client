import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { baseUrl } from "../api/api";

const MenuContext = createContext({});

export const MenuDataProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch(`${baseUrl}/menu`);

  //Fetch company data
  useEffect(() => {
    if (data && data.data) {
      const activeSlides = data.data.data.filter(
        (slider) => slider._status === 1
      );
      setMenus(activeSlides);
      console.log(activeSlides);
    }
  }, [data]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        setMenus,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
