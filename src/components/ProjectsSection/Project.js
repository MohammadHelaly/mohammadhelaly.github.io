import styles from "../AboutSection/TimelineItem.module.css"; // Import your CSS module here
import githubIcon from "../../assets/icons/github.svg"; // Import your icons here

const Project = ({ title, githubLink, description, images }) => {
	return (
		<div>
			<div
				id="carousel-1"
				className="carousel slide project-carousel"
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carousel-1"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carousel-1"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carousel-1"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item project-carousel-item active">
						<video src={images[0]} autoplay muted loop playsinline>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="carousel-item project-carousel-item">
						<video src={images[1]} autoplay muted loop playsinline>
							Your browser does not support the video tag.
						</video>
					</div>
					<div className="carousel-item project-carousel-item">
						<img
							src={images[2]}
							className="d-block w-100 carousel-img"
							alt="Slide 3"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carousel-1"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carousel-1"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div className="project-description-container">
				<h3 className="display-6 project-title">
					{title} |{" "}
					<a href={githubLink} target="_blank">
						<img
							src="icons/github.svg"
							alt="GitHub"
							className="dark-icon project-link"
						/>
					</a>
				</h3>
				<ul>
					{description.map((line, index) => (
						<li key={index} className="lead line">
							{line}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Project;
