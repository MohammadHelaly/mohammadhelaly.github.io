const Icon = (props) => {
	const { link, to, src, alt, iconClassName, linkClassName } = props;

	return link === true ? (
		<a
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			className={`${linkClassName}`}>
			<img src={src} alt={alt} className={`icon ${iconClassName}`} />
		</a>
	) : (
		<img src={src} alt={alt} className={`icon ${iconClassName}`} />
	);
};

export default Icon;
