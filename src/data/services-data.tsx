import { WebDevelopment, MobileDevelopment, DataScience } from "@/assets/icons";

const servicesData = [
  {
    serviceTitle: "Web Development",
    serviceDescription:
      "Building responsive websites and web applications. Giving users the best experience possible.",
    serviceIcon: <WebDevelopment className="h-full w-full" />,
  },
  {
    serviceTitle: "Mobile Development",
    serviceDescription:
      "Developing cross-platform mobile applications. Providing users with a seamless experience.",
    serviceIcon: <MobileDevelopment className="h-full w-full" />,
  },
  {
    serviceTitle: "Data Science & Machine Learning",
    serviceDescription:
      "Designing intelligent systems that learn from data. Extracting valuable insights and making accurate predictions.",
    serviceIcon: <DataScience className="h-full w-full" />,
  },
];

export { servicesData };
