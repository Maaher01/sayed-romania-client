import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../api/api";
import axios from "axios";

const MenuContext = createContext({});

export const MenuDataProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Fetch menu data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/menu`);
        const data = await response.data.data.data;
        const activeMenus = data.filter((menu) => menu._status === 1);
        setMenus(activeMenus);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

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
