import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	err: {
		display: "flex",
		alignItems: "center",
	},
	errWord: {
		marginLeft: "5%",
		color: "red",
	},
	submitBtn: {
		padding: "8px 56px",
	},
});

const Submit = ({ handleSubmit, miss }) => {
	const classes = useStyles();

	return (
		<div className={classes.err}>
			<Button
				className={classes.submitBtn}
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				送信
			</Button>
			{miss && <p className={classes.errWord}>正しく入力してください</p>}
		</div>
	);
};
export default Submit;
