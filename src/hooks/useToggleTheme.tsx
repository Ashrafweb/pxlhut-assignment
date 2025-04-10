import { useEffect, useState } from "react";

export function useToggleTheme() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const classList = document.documentElement.classList;
		const stored = localStorage.getItem("theme");

		if (stored === "dark") {
			classList.add("dark");
			setIsDark(true);
		} else {
			classList.remove("dark");
			setIsDark(false);
		}
	}, []);

	const toggleDarkMode = () => {
		const classList = document.documentElement.classList;
		const isDarkNow = classList.contains("dark");

		if (isDarkNow) {
			classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	return { isDark, toggleDarkMode };
}
