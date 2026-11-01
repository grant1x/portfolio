import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const InterFont = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-Inter",
});

export const metadata = {
	title: "Grant's Portfolio",
	description: "Portfolio",
	icons: {
		// icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<body className={`${InterFont.variable}`}>
					<Header />
					<PageTransition>{children}</PageTransition>
				</body>
			</html>
		</>
	);
}
