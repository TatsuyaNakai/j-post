import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import TagList from "./components/TagList";

const useStyles = makeStyles({
	form: {
		display: "block",
		width: "60%",
		margin: "5% auto",
	},
});

function App() {
	const [submited, isSubmited] = useState(true);
	const classes = useStyles();

	return (
		<>
			<Header />
			<div className={classes.form}>
				{submited ? (
					<TagList isSubmited={isSubmited} />
				) : (
					<p className={classes.submit}>ありがとうございます、送信しました。</p>
				)}
			</div>
		</>
	);
}

export default App;
