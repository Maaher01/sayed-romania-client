import Breadcrumbs from "../components/Breadcrumbs";
import CompanyProfile from "../components/CompanyProfile";
import CustomerReview from "../components/CustomerReview";
import ChairmanMessage from "../components/ChairmanMessage";
import WhyChooseUs from "../components/WhyChooseUs";

const PortfolioDetails = () => {
	return (
		<div>
			<Breadcrumbs pageTitle="Portfolio Details" />
			<CompanyProfile />
			<ChairmanMessage
				text="ASSALAMU ALAIKUM. I Warmly Welcome You All To My Company, SAYED ROMANIA OVERSEAS LTD. RL NO 2663 (YOUR TRUSTED PARTNER). Thank You For Spending Your Valuable Time Going Through My Website. I Hope That Once You Go Through The Entire Website, You Will Not Return Empty-Handed. In This Competitive Era Of Business, Competition And Trust Are Inversely Related To Each Other. As Competition Increases, The Trust Of Clients Decreases As They Tend To Be In A Dilemma About Which Company To Trust. Therefore, SAYED ROMANIA OVERSEAS LTD. Is Here To Secure Your Trust With Its Top-Notch Service. I Love Traveling A Lot And Know The Essentials Of Its Services. I Have Made This Company Fulfill All The Essentials Of Traveling.
SAYED ROMANIA OVERSEAS LTD. Invites You To Try Their Umrah Packages From Bangladesh To Perform Your Holy Umrah. With The Help Of Our Expert, Professional, And Religious Guide, You Will Be Able To Complete Your Umrah Perfectly As It Should Be Done. SAYED ROMANIA OVERSEAS LTD. Ensures Safe And Relaxes Traveling Like Never.
Our Cheap Holiday Packages From Bangladesh Have Won The Hearts Of Most Travelers, Ensuring, And Securing Their Trust Towards Us And Making Them Our Permanent Loyal Customers. Once You Are On Board With Us You Have Nothing To Worry About At All. Of Course, This Level Of Confidence Would Not Have Been Possible Without The Trust And Support Of My Very Experienced Team Members Who Have Been There For The Company Throughout. They Have Taken Care Of This Company As If It Were Their Own And Would Do Anything To Make Sure That Your Travel Is Enjoyable And Memorable For Life.
I Am Very Proud Of My Team And Company For Its Wonderful Services And Proud Of The Fact That Our Best Quality Service Has Won So Many Hearts And The Trust Of Customers Who Came On Board With Us. It Is An Honor To Have Touched So Many Hearts And Become A Part Of Their Life As Well. I Thank All My Customers And My Team For Making SAYED ROMANIA OVERSEAS LTD. A Success. Without You All, SAYED ROMANIA OVERSEAS LTD Would Not Have Been As Successful As It Is Today. As Everyone Says, “The Sky Is The Limit,” My Vision Is To Become The Best Travel Agency In Bangladesh, And One Day, I Shall Spread The Wings Of SAYED ROMANIA OVERSEAS LTD. Throughout The Capital And Then, Throughout The World."
				maxLength={1300}
			/>
			<WhyChooseUs />
			<CustomerReview />
		</div>
	);
};

export default PortfolioDetails;
