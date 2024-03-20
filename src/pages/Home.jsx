import ScheduleArea from "../components/ScheduleArea";
import Slider from "../components/Slider";
import FeaturesSection from "../components/FeaturesSection";
import FunFacts from "../components/FunFacts";
import CallToAction from "../components/CallToAction";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import PricingTable from "../components/PricingTable";
import BlogArea from "../components/BlogArea";
import Clients from "../components/Clients";
import Appointment from "../components/Appointment";
import NewsletterArea from "../components/NewsletterArea";
import ProcessingArea from "../components/ProcessingArea";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
	return (
		<div>
			<Slider />
			<ScheduleArea />
			<FeaturesSection />
			<FunFacts />
			<ProcessingArea />
			<WhoWeAre />
			<CallToAction />
			<Portfolio />
			<Service />
			{/* <PricingTable /> */}
			<BlogArea />
			<Clients />
			<Appointment />
			<NewsletterArea />
		</div>
	);
};

export default Home;
