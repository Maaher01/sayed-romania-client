import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { baseUrl } from "../api/api";

const CompanyContext = createContext({});

export const CompanyDataProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState([]);
  const { data, isLoading, fetchError } = useAxiosFetch(
    `${baseUrl}/companysetup`
  );

  //Fetch company data
  useEffect(() => {
    if (data && data.data) {
      setCompanyInfo(data.data[0]);
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
