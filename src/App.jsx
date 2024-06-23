import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null)
  const menuRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Navbar homeRef={homeRef} menuRef={menuRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Home homeRef={homeRef} menuRef={menuRef} />
      <Menu menuRef={menuRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;
