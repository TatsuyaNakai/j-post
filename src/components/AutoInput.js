import React, { useState, useContext } from "react";
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
});

const AutoInput = ({ autoInput, display }) => {
	const classes = useStyles();

	return (
		<div className={classes.err}>
			<Button variant="contained" onClick={autoInput} size="small">
				自動入力
			</Button>
			{display && <p className={classes.errWord}> 正しく入力してください。</p>}
		</div>
	);
};

export default AutoInput;
