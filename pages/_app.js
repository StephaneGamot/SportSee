import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header/Header";
import SideBar from "../components/sideBar/SideBar";


const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<SideBar />
			<Component {...pageProps} />
		</>
	);
}
