import React, { useState } from "react";
import axios from "axios";
import axiosJsonAdapter from "axios-jsonp";

import AutoInput from "./AutoInput";
import Submit from "./Submit"; //
import Tag from "./Tag";

const JAPANPOST_API_URI = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="; //

const TagList = ({ isSubmited }) => {
	const [code, setCode] = useState("");
	const [display, isDisplay] = useState(false);
	const [pref, setPref] = useState("");
	const [city, setCity] = useState("");
	const [town, setTown] = useState("");
	const [adress, setAdress] = useState("");
	const [miss, isMiss] = useState(false);

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
			isSubmited(false);
		} else {
			isMiss(true);
		}
	};
	return (
		<>
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
		</>
	);
};

export default TagList;
