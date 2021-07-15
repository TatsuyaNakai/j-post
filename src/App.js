import React, { useState } from "react";
import Tag from "./components/Tag"; //
import axios from "axios";
import axiosJsonAdapter from "axios-jsonp";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Submit from "./components/Submit"; //
import AutoInput from "./components/AutoInput";
import TagList from "./components/TagList";

const JAPANPOST_API_URI = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
const useStyles = makeStyles({
	form: {
		display: "block",
		width: "60%",
		margin: "5% auto",
	},
});

function App() {
	const [code, setCode] = useState("");
	const [pref, setPref] = useState("");
	const [city, setCity] = useState("");
	const [town, setTown] = useState("");
	const [adress, setAdress] = useState("");
	const [display, isDisplay] = useState(false);
	const [submit, isSubmit] = useState(true);
	const [miss, isMiss] = useState(false);
	const classes = useStyles();

	const autoInput = () => {
		isDisplay(false);
		const callApi = async () => {
			const res = await axios.get(JAPANPOST_API_URI + code, {
				adapter: axiosJsonAdapter,
			});
			try {
				const results = res.data.results[0];
				const { address1, address2, address3 } = { ...results };
				setPref(address1);
				setCity(address2);
				setTown(address3);
			} catch {
				isDisplay(true);
				setCode("");
			}
		};
		callApi();
	};

	const handleSubmit = () => {
		if (pref && city && town && adress) {
			setPref("");
			setCity("");
			setTown("");
			setAdress("");
			console.log(pref, city, town, adress);
			isSubmit(false);
		} else {
			isMiss(true);
		}
	};

	return (
		<>
			<Header />
			<div className={classes.form}>
				{submit ? (
					// <TagList />
					<div>
						<Tag
							title="郵便番号"
							example={code}
							placeholder="5650862"
							inputText={(e) => setCode(e.target.value)}
						/>
						<AutoInput autoInput={autoInput} display={display} />
						<Tag
							title="都道府県"
							example={pref}
							placeholder="大阪府"
							inputText={(e) => setPref(e.target.value)}
						/>
						<Tag
							title="市区町村"
							example={city}
							placeholder="吹田市"
							inputText={(e) => setCity(e.target.value)}
						/>
						<Tag
							title="町域"
							example={town}
							placeholder="津雲台"
							inputText={(e) => setTown(e.target.value)}
						/>
						<Tag
							title="番地・マンション名"
							inputText={(e) => setAdress(e.target.value)}
						/>
						<br />
						<Submit handleSubmit={handleSubmit} miss={miss} />
					</div>
				) : (
					<p className={classes.submit}>ありがとうございます、送信しました。</p>
				)}
			</div>
		</>
	);
}

export default App;
