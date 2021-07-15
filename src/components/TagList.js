import AutoInput from "./components/AutoInput";
import Tag from "./components/Tag";

const TagList = () => {
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
