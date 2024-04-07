import React from "react";
import ListItem from "../Miscellaneous/ListItem";
import styles from "./ServicesSection.module.css";
import servicesData from "../../assets/data/servicesData";

const ServicesSection = () => {
	return (
		<div className={styles["services-container"]}>
			<div className="container">
				<div className={styles["services"]}>
					{servicesData.map((service, index) => (
						<ListItem key={index} className={styles["service"]}>
							{React.cloneElement(service.serviceIcon, {
								fill: "#000000",
								className: styles["service-icon"],
							})}
							<h3
								className={`text-dark ${styles["service-title"]}`}>
								{service.serviceTitle}
							</h3>
							<p className="text-muted">
								{service.serviceDescription}
							</p>
						</ListItem>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
