import Breadcrumbs from "../components/Breadcrumbs";
import CompanyProfile from "../components/CompanyProfile";
import CustomerReview from "../components/CustomerReview";
import OurManagement from "../components/OurManagement";
import WhyChooseUs from "../components/WhyChooseUs";

const PortfolioDetails = () => {
	return (
		<div>
			<Breadcrumbs pageTitle="Portfolio Details" />
			<CompanyProfile />
			<OurManagement />
			<WhyChooseUs />
			<CustomerReview />
		</div>
	);
};

export default PortfolioDetails;
