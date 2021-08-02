export const themeStorage = () => {
	const theme = window.localStorage.getItem("theme");

	if (!theme) {
		return "dark";
	}

	return theme;
};
