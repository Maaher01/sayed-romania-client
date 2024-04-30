import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./pages/ContactUs";
import PortfolioDetails from "./pages/PortfolioDetails";
import ChairmanMsg from "./pages/ChairmanMsg";
import { CompanyDataProvider } from "./context/CompanyContext";
import { MenuDataProvider } from "./context/MenuContext";
import ClientStatus from "./pages/ClientStatus";
import ClientStatusInfo from "./pages/ClientStatusInfo";

const App = () => {
  return (
    <CompanyDataProvider>
      <MenuDataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="portfoliodetail" element={<PortfolioDetails />} />
            <Route path="chairman-msg" element={<ChairmanMsg />} />
            <Route path="clientstatus">
              <Route index element={<ClientStatus />} />
              <Route path=":clientcode" element={<ClientStatusInfo />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </MenuDataProvider>
    </CompanyDataProvider>
  );
};

export default App;
