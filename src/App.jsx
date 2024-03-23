import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./pages/ContactUs";
import PortfolioDetails from "./pages/PortfolioDetails";
import ChairmanMsg from "./pages/ChairmanMsg";
import { CompanyDataProvider } from "./context/CompanyContext";

const App = () => {
  return (
    <CompanyDataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="portfolioDetail" element={<PortfolioDetails />} />
          <Route path="chairman-msg" element={<ChairmanMsg />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </CompanyDataProvider>
  );
};

export default App;
