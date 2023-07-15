import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Extensions from "./pages/Extensions";
import Bridal from "./pages/Bridal";
import Contact from "./pages/Contact";

const pages = [
  { name: "Home", href: "/", component: <Home /> },
  { name: "About", href: "/about", component: <About /> },
  { name: "Services", href: "/services", component: <Services /> },
  { name: "Extensions", href: "/extensions", component: <Extensions /> },
  { name: "Bridal", href: "/bridal", component: <Bridal /> },
  { name: "Contact", href: "/contact", component: <Contact />, right: true },
];

// console.log(import.meta.env.BASE_URL)

export default pages;
