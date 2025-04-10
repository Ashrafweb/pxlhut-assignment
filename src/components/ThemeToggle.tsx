"use client";

import { useToggleTheme } from "@/hooks/useToggleTheme";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
	const { isDark, toggleDarkMode } = useToggleTheme();

	return (
		<button
			onClick={toggleDarkMode}
			className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
				isDark ? "bg-gray-700" : "bg-yellow-400"
			}`}
			role='switch'
			aria-checked={isDark}
			aria-label='Toggle theme'
		>
			<span className='sr-only'>Toggle between dark and light theme</span>{" "}
			<span
				aria-hidden='true'
				className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
					isDark ? "translate-x-5" : "translate-x-0"
				}`}
			>
				<span
					className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
						isDark ? "opacity-0" : "opacity-100"
					}`}
					aria-hidden='true'
				>
					<FiSun className='h-3 w-3 text-yellow-500' />
				</span>

				<span
					className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-100 ease-out ${
						isDark ? "opacity-100" : "opacity-0"
					}`}
					aria-hidden='true'
				>
					<FiMoon className='h-3 w-3 text-gray-700' />
				</span>
			</span>
		</button>
	);
}
