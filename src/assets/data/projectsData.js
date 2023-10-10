import neural1 from "../images/neural1.jpg";
import neural2 from "../images/neural2.jpg";
import neural3 from "../images/neural3.jpg";
import moon1 from "../images/moon1.jpg";
import moon2 from "../images/moon2.jpg";
import moon3 from "../images/moon3.jpg";
import medical1 from "../images/medical1.jpg";
import medical2 from "../images/medical2.jpg";
import medical3 from "../images/medical3.jpg";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import library1 from "../images/library1.jpg";
import library2 from "../images/library2.jpg";
import library3 from "../images/library3.jpg";
import paint1 from "../images/paint1.jpg";
import paint2 from "../images/paint2.jpg";
import paint3 from "../images/paint3.jpg";

const projectsData = [
	{
		title: "NeuralVisions",
		githubLink:
			"https://github.com/MohammadHelaly/Visual-Question-Answering",
		images: [neural1, neural2, neural3],
		description: [
			"Web app that answers open-ended questions about images, developed using Python, Flask and React.js.",
			"Deep learning model incorporating OpenAI CLIP encoder into architecture, trained on the VizWiz dataset, reaching 68% accuracy and 80% answerability.",
		],
	},
	{
		title: "LUNAR TREK",
		siteLink: "https://mohammadhelaly.github.io/lunar-trek/",
		githubLink: "https://github.com/MohammadHelaly/lunar-trek",
		images: [moon1, moon2, moon3],
		description: [
			"Web app that visualizes lunar seismic events on a 3D model of the moon, developed with React.js and Unreal Engine 5, sourced from NASA's Apollo Seismic Event Catalogue.",
			"Built to participate in the 2023 NASA International Space Apps Challenge",
		],
	},
	{
		title: "MedicoPortal",
		githubLink:
			"https://github.com/MohammadHelaly/Medical-Record-Management-System",
		images: [medical1, medical2, medical3],
		description: [
			"Medical website with portals for patients, doctors and administrators to manage appointments and medical records.",
			"Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
		],
	},
	{
		title: "DriveIt.io",
		githubLink: "https://github.com/MohammadHelaly/Car-Rental-System",
		images: [car1, car2, car3],
		description: [
			"Car rental website with portals for both customers and staff to perform their respective operations.",
			"Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
		],
	},
	{
		title: "Libraria",
		githubLink:
			"https://github.com/MohammadHelaly/Library-Management-System",
		images: [library1, library2, library3],
		description: [
			"Staff-side library management app for administrators and librarians, developed in Java.",
			"Client-side library website for customers to reserve checkouts from a library online.",
		],
	},
	{
		title: "PaintFlow.studio",
		githubLink: "https://github.com/MohammadHelaly/Paint-Application",
		images: [paint1, paint2, paint3],
		description: [
			"Feature-rich paint application.",
			"Developed according to SOLID principles using several design patterns in Java.",
		],
	},
];

export default projectsData;
