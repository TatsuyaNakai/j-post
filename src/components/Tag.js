const Tag = ({ title, example, placeholder, inputText }) => {
	return (
		<>
			<h3>{title}</h3>
			<input
				type="text"
				value={example}
				placeholder={placeholder}
				onChange={inputText}
			/>
		</>
	);
};
export default Tag;
