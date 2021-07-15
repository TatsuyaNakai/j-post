import { TextField } from "@material-ui/core";

const TagTop = ({ title, example, placeholder, inputText }) => {
	const classes = useStyles();

	return (
		<div className={classes.tag}>
			<h3 className={classes.title}>{title}</h3>
			<TextField
				className={classes.textField}
				id="outlined-textarea"
				placeholder={placeholder}
				multiline
				value={example}
				variant="outlined"
				onChange={inputText}
				size="small"
			/>
		</div>
	);
};
export default TagTop;
