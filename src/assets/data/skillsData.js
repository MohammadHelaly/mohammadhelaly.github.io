import { ReactComponent as Cpp } from "../icons/cpp-monocolor.svg";
import { ReactComponent as Python } from "../icons/python-monocolor.svg";
import { ReactComponent as Java } from "../icons/java-monocolor.svg";
import { ReactComponent as Bash } from "../icons/bash-monocolor.svg";
import { ReactComponent as Html } from "../icons/html-monocolor.svg";
import { ReactComponent as Css } from "../icons/css-monocolor.svg";
import { ReactComponent as Mysql } from "../icons/mysql-monocolor.svg";
import { ReactComponent as Mongodb } from "../icons/mongodb-monocolor.svg";
import { ReactComponent as Javascript } from "../icons/javascript-monocolor.svg";
import { ReactComponent as Php } from "../icons/php-monocolor.svg";
import { ReactComponent as Git } from "../icons/git-monocolor.svg";
import { ReactComponent as Reactjs } from "../icons/reactjs-monocolor.svg";
import { ReactComponent as Redux } from "../icons/redux-monocolor.svg";
import { ReactComponent as Nodejs } from "../icons/nodejs-monocolor.svg";
import { ReactComponent as Expressjs } from "../icons/expressjs-monocolor.svg";
import { ReactComponent as Docker } from "../icons/docker-monocolor.svg";
import { ReactComponent as Aws } from "../icons/aws-monocolor.svg";
import { ReactComponent as Dataiku } from "../icons/dataiku-monocolor.svg";

const skillsData = [
	{
		name: "C & C++",
		icon: <Cpp />,
		className: "cpp-icon",
	},
	{
		name: "Python",
		icon: <Python />,
	},
	{
		name: "Java",
		icon: <Java />,
	},
	{
		// name: "Linux Shell & Bash",
		name: "Bash",
		icon: <Bash />,
	},
	{
		name: "HTML",
		icon: <Html />,
	},
	{
		name: "CSS",
		icon: <Css />,
	},
	{
		name: "JavaScript",
		icon: <Javascript />,
	},
	{
		name: "PHP",
		icon: <Php />,
		className: "php-icon",
	},
	{
		name: "MySQL",
		icon: <Mysql />,
		className: "mysql-icon",
	},
	{
		name: "MongoDB",
		icon: <Mongodb />,
	},

	{
		name: "AWS",
		icon: <Aws />,
	},
	{
		name: "Git",
		icon: <Git />,
	},
	{
		name: "Docker",
		icon: <Docker />,
	},
	{
		// name: "React.js & React Native",
		name: "React.js",
		icon: <Reactjs />,
	},
	{
		// name: "Redux & Redux Toolkit",
		name: "Redux",
		icon: <Redux />,
	},
	{
		name: "Node.js",
		icon: <Nodejs />,
	},
	{
		name: "Express.js",
		icon: <Expressjs />,
		className: "expressjs-icon",
	},

	{
		// name: "Dataiku DSS",
		name: "Dataiku",
		icon: <Dataiku />,
		className: "dataiku-icon",
	},
];

export default skillsData;
