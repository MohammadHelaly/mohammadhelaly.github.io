import React from "react";
import styles from "./Project.module.css";
import githubIcon from "../../assets/icons/github.svg";
import ListItem from "../Miscellaneous/ListItem";
import Icon from "../Miscellaneous/Icon";
import useAnimate from "../../hooks/use-animate";

const Project = (props) => {
	const { title, siteLink, githubLink, description, stack, images, id } =
		props;
	const carouselRef = useAnimate(styles["animate"], false);

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
					<h5 className={`display-6 ${styles["project-title"]}`}>
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
						<Icon
							link={true}
							to={githubLink}
							src={githubIcon}
							alt="GitHub Link"
							iconClassName={`white-icon ${styles["project-icon"]}`}
						/>
					</h5>
					<ul>
						{description.map((entry, index) => (
							<ListItem
								key={index}
								className={`lead line ${styles["project-decription"]}`}>
								{entry}
							</ListItem>
						))}
						<ListItem key={title + " stack"}>
							{stack.map((skill, index) => {
								return (
									<Icon
										key={"skill " + index}
										link={false}
										src={skill.icon}
										alt="Skill Icon"
										iconClassName={`${
											styles["project-skill-icon"]
										} ${styles["project-icon"]} ${
											styles[skill.className]
										}`}
									/>
								);
							})}
						</ListItem>
					</ul>
				</div>
			</div>
			<div
				className={`text-dark ${styles["project-description-container"]}`}>
				<h5 className={`display-6 ${styles["project-title"]}`}>
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
					<Icon
						link={true}
						to={githubLink}
						src={githubIcon}
						alt="GitHub Link"
						iconClassName={`dark-icon ${styles["project-icon"]}`}
					/>
				</h5>
				<ul>
					{description.map((entry, index) => (
						<ListItem
							key={index}
							className={`lead line ${styles["project-decription"]}`}>
							{entry}
						</ListItem>
					))}
					<ListItem key={title + " stack"}>
						{stack.map((skill, index) => {
							return (
								<Icon
									key={"skill " + index}
									link={false}
									src={skill.icon}
									alt="Skill Icon"
									iconClassName={`${
										styles["project-skill-icon"]
									} ${styles["project-icon"]} ${
										styles[skill.className]
									}`}
								/>
							);
						})}
					</ListItem>
				</ul>
			</div>
		</div>
	);
};

export default Project;
