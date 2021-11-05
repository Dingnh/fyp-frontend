const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	mode: "jit",
	purge: {
		enabled: !process.env.ROLLUP_WATCH,
		mode: "all",
		content: ["./public/index.html", "./src/**/*.svelte"],
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontSize: {
			"3xs": ".5rem",
			"2xs": ".625rem",
			xs: ".75rem",
			sm: ".875rem",
			md: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		boxShadow: {
			"facemask-sm": "0 3px 4px 0 rgba(0,0,0,0.15)",
			"facemask-md": "0 8px 12px 0 rgba(0,0,0,0.15)",
			"facemask-lg": "0 12px 14px 0 rgba(0,0,0,0.15)",
			"facemask-xl": "0 16px 18px 0 rgba(0,0,0,0.15)",
			"facemask-xxl": "0 20px 24px 0 rgba(0,0,0,0.15)",
			"facemask-inverted-sm": "0 -3px 20px rgba(0,0,0,0.15)",
			"facemask-inverted-md": "0 -6px 20px rgba(0,0,0,0.15)",
			"facemask-inverted-lg": "0 -15px 20px rgba(0,0,0,0.15)",
		},
		colors: {
			facemask: {
				primary: "#FF4D00",
				gray: {
					100: "#F5F6F7",
					200: "#E4E6E8",
					300: "#C8CCD4",
					400: "#9A9EA7",
					500: "rgba(13, 10, 25, 0.75)",
					600: "#0D0A19",
				},
				logoBg: "#00141A",
				success: "#4BDBC3",
				warning: "#F9D335",
				pageBg: "rgba(13, 10, 25, 0.93)",
				cardBg: "#1A1725",
				hover: {
					primary: "#FF6522",
					purple: "#8E7CEF",
					gray: {
						100: "#E4E6E8",
					},
				},
			},
			...defaultTheme.colors,
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "2px",
			3: "3px",
			4: "4px",
			6: "6px",
			8: "8px",
		},
		extend: {
			zIndex: {
				"-10": "-10",
				"-20": "-20",
				"-30": "-30",
			},
			spacing: {
				13: "3.25rem",
				15: "3.5rem",
				26: "6.5rem",
				65: "16.25rem",
				90: "22.5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
