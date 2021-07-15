import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">住所検索アプリ</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
