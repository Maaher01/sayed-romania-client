import ScheduleArea from "../components/ScheduleArea";
import Slider from "../components/Slider";
import FeaturesSection from "../components/FeaturesSection";
import FunFacts from "../components/FunFacts";
import WhyChoose from "../components/WhyChoose";
import CallToAction from "../components/CallToAction";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import PricingTable from "../components/PricingTable";
import BlogArea from "../components/BlogArea";
import Clients from "../components/Clients";
import Appointment from "../components/Appointment";
import NewsletterArea from "../components/NewsletterArea";

const Home = () => {
  return (
    <div>
      <Slider />
      <ScheduleArea />
      <FeaturesSection />
      <FunFacts />
      <WhyChoose />
      <CallToAction />
      <Portfolio />
      <Service />
      <PricingTable />
      <BlogArea />
      <Clients />
      <Appointment />
      <NewsletterArea />
    </div>
  );
};

export default Home;
