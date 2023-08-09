import React from "react";
import styles from "./Project.module.css";
import githubIcon from "../../assets/icons/github.svg";
import ListItem from "../Miscellaneous/ListItem";

const Project = (props) => {
	const { title, githubLink, description, images, id } = props;
	return (
		<div className={styles["project"]}>
			<div
				id={`carousel-${id}`}
				className="carousel slide"
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					{images.map((item, index) => (
						<button
							key={index}
							type="button"
							data-bs-target={`#carousel-${id}`}
							data-bs-slide-to={index}
							className={index === 0 ? "active" : ""}
							aria-label={`Slide ${index + 1}`}></button>
					))}
				</div>
				<div className="carousel-inner">
					{images.map((item, index) => (
						<div
							key={index}
							className={`carousel-item ${
								styles["project-carousel-item"]
							} ${index === 0 ? "active" : ""}`}>
							{item.includes(".mp4") ? (
								<video
									src={item}
									className={styles["project-carousel-slide"]}
									autoPlay
									muted
									loop
									playsInline>
									Your browser does not support the video tag.
								</video>
							) : (
								<img
									src={item}
									className={`d-block w-100 carousel-img ${styles["project-carousel-slide"]}`}
									alt={`Slide ${index + 1}`}
								/>
							)}
							<div
								className={`carousel-caption text-center ${styles["project-carousel-caption"]}`}>
								<h5
									className={`display-6 ${styles["project-title"]}`}>
									{title} |{" "}
									<a
										href={githubLink}
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={githubIcon}
											alt="GitHub Link"
											className="icon white-icon"
										/>
									</a>
								</h5>
								<ul>
									{description.map((entry, index) => (
										<ListItem
											key={index}
											className={`lead ${styles["project-decription"]}`}>
											{entry}
										</ListItem>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target={`#carousel-${id}`}
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target={`#carousel-${id}`}
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<div
				className={`text-dark ${styles["project-description-container"]}`}>
				<h5 className={`display-6 ${styles["project-title"]}`}>
					{title} |{" "}
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer">
						<img
							src={githubIcon}
							alt="GitHub Link"
							className="icon dark-icon"
						/>
					</a>
				</h5>
				<ul>
					{description.map((entry, index) => (
						<ListItem
							key={index}
							className={`lead ${styles["project-decription"]}`}>
							{entry}
						</ListItem>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Project;
