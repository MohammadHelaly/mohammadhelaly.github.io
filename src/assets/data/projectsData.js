import learn1 from "../images/learn1.jpg";
import learn2 from "../images/learn2.jpg";
import learn3 from "../images/learn3.jpg";
import help1 from "../images/help1.jpg";
import help2 from "../images/help2.jpg";
import help3 from "../images/help3.jpg";
import neural1 from "../images/neural1.jpg";
import neural2 from "../images/neural2.jpg";
import neural3 from "../images/neural3.jpg";
import moon1 from "../images/moon1.jpg";
import moon2 from "../images/moon2.jpg";
import moon3 from "../images/moon3.jpg";
// import medical1 from "../images/medical1.jpg";
// import medical2 from "../images/medical2.jpg";
// import medical3 from "../images/medical3.jpg";
// import car1 from "../images/car1.jpg";
// import car2 from "../images/car2.jpg";
// import car3 from "../images/car3.jpg";
// import library1 from "../images/library1.jpg";
// import library2 from "../images/library2.jpg";
// import library3 from "../images/library3.jpg";
import paint1 from "../images/paint1.jpg";
import paint2 from "../images/paint2.jpg";
import paint3 from "../images/paint3.jpg";
import { ReactComponent as Java } from "../icons/java-monocolor.svg";
// import { ReactComponent as MySql } from "../icons/mysql-monocolor.svg";
import { ReactComponent as ReactJs } from "../icons/reactjs-monocolor.svg";
import { ReactComponent as Python } from "../icons/python-monocolor.svg";
import { ReactComponent as Flask } from "../icons/flask.svg";
// import { ReactComponent as Php } from "../icons/php-monocolor.svg";
// import { ReactComponent as Html } from "../icons/html-monocolor.svg";
// import { ReactComponent as Css } from "../icons/css-monocolor.svg";
import { ReactComponent as UnrealEngine } from "../icons/unrealengine-monocolor.svg";
import { ReactComponent as MongoDb } from "../icons/mongodb-monocolor.svg";
import { ReactComponent as NodeJs } from "../icons/nodejs-monocolor.svg";
import { ReactComponent as ExpressJs } from "../icons/expressjs-monocolor.svg";
import { ReactComponent as SocketIo } from "../icons/socketio.svg";

const projectsData = [
	{
		title: "Learnly",
		githubLink: "https://github.com/MohammadHelaly/learnly",
		images: [learn1, learn2, learn3],
		description: [
			"An online learning platform for students and instructors to enroll in and create courses, developed using React.js, Node.js, Express.js, MongoDB and Socket.io.",
			"It includes features such as a course marketplace, a course creator, livestreams and real-time chatting.",
		],
		stack: [
			{
				icon: <MongoDb />,
				className: "mongodb-icon",
			},
			{
				icon: <ExpressJs />,
			},
			{
				icon: <ReactJs />,
			},
			{
				icon: <NodeJs />,
			},
			{
				icon: <SocketIo />,
			},
		],
	},
	{
		title: "Helprr",
		githubLink: "https://github.com/MohammadHelaly/helprr",
		images: [help1, help2, help3],
		description: [
			"A mobile app designed to support blind and deaf people.",
			"It utilizes a pre-trained deep learning model for visual object detection in live video feeds from the phone camera and implements text-to-speech and speech-to-text functionalities.",
		],
		stack: [
			{
				icon: <ReactJs />,
			},
		],
	},
	{
		title: "NeuralVisions",
		githubLink:
			"https://github.com/MohammadHelaly/Visual-Question-Answering",
		images: [neural1, neural2, neural3],
		description: [
			"A web app for answering open-ended questions about images, reaching 68% accuracy and 80% answerability.",
			"It utilizes a deep learning model that incorporates the OpenAI CLIP encoder into its architecture and was trained on the VizWiz dataset.",
		],
		stack: [
			{
				icon: <ReactJs />,
			},
			{
				icon: <Python />,
			},
			{
				icon: <Flask />,
			},
		],
	},
	{
		title: "Lunar Trek",
		siteLink: "https://lunar-trek.vercel.app/",
		githubLink: "https://github.com/MohammadHelaly/lunar-trek",
		images: [moon1, moon2, moon3],
		description: [
			"A web app for visualizing lunar seismic events on a 3D model of the moon, sourced from NASA's Apollo Seismic Event Catalogue.",
			"It globally won the 2023 NASA International Space Apps Challenge out of 8715 teams and 5556 projects, and was awarded the Best Use of Science Award.",
		],
		stack: [
			{
				icon: <ReactJs />,
			},
			{
				icon: <UnrealEngine />,
			},
		],
	},
	// {
	// 	title: "MedicoPortal",
	// 	githubLink:
	// 		"https://github.com/MohammadHelaly/Medical-Record-Management-System",
	// 	images: [medical1, medical2, medical3],
	// 	description: [
	// 		"A medical website with portals for patients, doctors and administrators to manage appointments, prescriptions and medical records.",
	// 		// "Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
	// 	],
	// 	stack: [
	// 		{
	// 			icon: <Html />,
	// 		},
	// 		{
	// 			icon: <Css />,
	// 		},
	// 		{
	// 			icon: <Php />,
	// 		},
	// 		{
	// 			icon: <MySql />,
	// 		},
	// 	],
	// },
	// {
	// 	title: "DriveIt.io",
	// 	githubLink: "https://github.com/MohammadHelaly/Car-Rental-System",
	// 	images: [car1, car2, car3],
	// 	description: [
	// 		"A car rental website with portals for both customers and staff to manage reservations as well as view reports about operations.",
	// 		// "Built using HTML/CSS for website frontend as well as PHP and MySQL for backend programming.",
	// 	],
	// 	stack: [
	// 		{
	// 			icon: <Html />,
	// 		},
	// 		{
	// 			icon: <Css />,
	// 		},
	// 		{
	// 			icon: <Php />,
	// 		},
	// 		{
	// 			icon: <MySql />,
	// 		},
	// 	],
	// },
	// {
	// 	title: "Libraria",
	// 	githubLink:
	// 		"https://github.com/MohammadHelaly/Library-Management-System",
	// 	images: [library1, library2, library3],
	// 	description: [
	// 		"A staff-side library management application for administrators and librarians to manage inventory, checkouts, payments, reservations, and other operations.",
	// 		// "Client-side library website for customers to reserve checkouts from a library online.",
	// 	],
	// 	stack: [
	// 		{
	// 			icon: <Java />,
	// 		},
	// 		{
	// 			icon: <MySql />,
	// 		},
	// 	],
	// },
	{
		title: "PaintFlow.studio",
		githubLink: "https://github.com/MohammadHelaly/Paint-Application",
		images: [paint1, paint2, paint3],
		description: [
			"A feature-rich paint application for users to use different strokes, colors, and tools to draw and manipulate different shapes, as well as save their paintings.",
			// "Developed according to SOLID principles using several design patterns in Java.",
		],
		stack: [
			{
				icon: <Java />,
			},
		],
	},
];

export default projectsData;
