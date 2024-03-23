import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const CompanyContext = createContext({});

export const CompanyDataProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch(
    "http://localhost:8000/api/companysetup"
  );

  //Fetch company data
  useEffect(() => {
    if (data && data.data) {
      setCompanyInfo(data.data[0]);
      console.log(data.data[0]);
    }
  }, [data]);

  return (
    <CompanyContext.Provider
      value={{
        companyInfo,
        setCompanyInfo,
        fetchError,
        isLoading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyContext;
