import { ReactComponent as WebDevelopment } from "../../assets/icons/web-development.svg";
import { ReactComponent as MobileDevelopment } from "../../assets/icons/mobile-development.svg";
import { ReactComponent as DataScience } from "../../assets/icons/data-science.svg";

const servicesData = [
	{
		serviceTitle: "Web Development",
		serviceDescription:
			"Building responsive websites and web applications. Giving users the best experience possible.",
		serviceIcon: <WebDevelopment />,
	},
	{
		serviceTitle: "Mobile Development",
		serviceDescription:
			"Developing cross-platform mobile applications. Providing users with a seamless experience.",
		serviceIcon: <MobileDevelopment />,
	},
	{
		serviceTitle: "Data Science & Machine Learning",
		serviceDescription:
			"Designing intelligent systems that learn from data. Extracting valuable insights and making accurate predictions.",
		serviceIcon: <DataScience />,
	},
];

export default servicesData;
