import "../styles/globals.css";

// Internal import
import { NavBar, Footer } from "../Components";
import {CrowdFundingProvide} from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
    return (
        <>
        <CrowdFundingProvide/>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
            <CrowdFundingProvide/>
        </>
    );
}
