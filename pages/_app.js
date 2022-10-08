import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import Theme from "../utils/theme";
import { Navbar ,Footer } from "../components/Common/index";
import 'antd/dist/antd.css';
//import { Navbar, Footer } from "@components/Common";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
