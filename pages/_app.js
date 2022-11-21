
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
function MyApp({ Component, pageProps }) {
useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return <>
       <Logo/>
       <Slider/>
      <Component {...pageProps} />
      <Footer/>
  </>
}

export default MyApp
