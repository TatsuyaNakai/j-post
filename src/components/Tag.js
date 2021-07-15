import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	tag: {
		display: "flex",
		alignItems: "center",
		margin: "2% 0",
	},
	title: {
		width: "60%",
		marginRight: "5%",
	},
	textField: {
		width: "80%",
	},
});

const Tag = ({ title, example, placeholder, inputText }) => {
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
			/>
		</div>
	);
};
export default Tag;
