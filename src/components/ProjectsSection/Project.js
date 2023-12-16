import React from "react";
import styles from "./Project.module.css";
import ListItem from "../Miscellaneous/ListItem";
import Icon from "../Miscellaneous/Icon";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import useAnimate from "../../hooks/use-animate";

const Project = (props) => {
	const { title, siteLink, githubLink, description, stack, images, id } =
		props;
	const carouselRef = useAnimate("animate", false);

	return (
		<div ref={carouselRef} className={styles["project"]}>
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
									className={`carousel-video ${styles["project-carousel-slide"]}`}
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
				<div
					className={`carousel-caption text-center ${styles["project-carousel-caption"]}`}>
					<h6 className={`display-6 ${styles["project-title"]}`}>
						{siteLink ? (
							<a
								href={siteLink}
								target="_blank"
								rel="noopener noreferrer">
								{title}
							</a>
						) : (
							title
						)}{" "}
						|{" "}
						<Icon link={true} to={githubLink}>
							<GitHub
								height="30px"
								width="30px"
								className={styles["project-icon"]}
								fill="#ffffff"
							/>
						</Icon>
					</h6>
					{description.map((entry, index) => (
						<ListItem key={index}>
							<p>{entry}</p>
						</ListItem>
					))}
					<ListItem key={title + " stack"}>
						{stack.map((skill, index) => {
							return (
								<Icon key={"skill " + index} link={false}>
									{React.cloneElement(skill.icon, {
										fill: "#ffffff",
										height: "50px",
										width: "50px",
										className: styles["project-skill-icon"],
									})}
								</Icon>
							);
						})}
					</ListItem>
				</div>
			</div>
			<div
				className={`text-dark ${styles["project-description-container"]}`}>
				<h6 className={`display-6 ${styles["project-title"]}`}>
					{siteLink ? (
						<a
							href={siteLink}
							target="_blank"
							rel="noopener noreferrer">
							{title}
						</a>
					) : (
						title
					)}{" "}
					|{" "}
					<Icon link={true} to={githubLink}>
						<GitHub
							height="30px"
							width="30px"
							className={styles["project-icon"]}
							fill="#212529"
						/>
					</Icon>
				</h6>
				{description.map((entry, index) => (
					<ListItem key={index}>
						<p className="text-muted">{entry}</p>
					</ListItem>
				))}
				<ListItem key={title + " stack"}>
					{stack.map((skill, index) => {
						return (
							<Icon key={"skill " + index} link={false}>
								{React.cloneElement(skill.icon, {
									fill: "#212529",
									height: "30px",
									width: "30px",
									className: styles["project-skill-icon"],
								})}
							</Icon>
						);
					})}
				</ListItem>
			</div>
		</div>
	);
};

export default Project;
