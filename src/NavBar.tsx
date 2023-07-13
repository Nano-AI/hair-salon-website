import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion, useViewportScroll } from 'framer-motion';
import { useState, useEffect } from "react";

var pages = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Extensions", href: "#extensions" },
  { name: "Bridal", href: "#bridal" },
];

function NavBar() {
  const [hidden, setHidden] = useState(false);

  const scrollY: any = useViewportScroll().scrollY;

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  }

  function update() {
    if (scrollY?.prev > scrollY?.current) {
      setHidden(false);
      console.log("visible")
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
      console.log("hidden")
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  })

  return (
    <motion.div className="fixed-top" variants={variants} animate={hidden ? "hidden" : "visible"} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top" fixed="top">
        <Container className="my-2">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-items-end justify-end">
            <Nav className="me-auto">
              {pages.map((item) => {
                return (
                  <motion.div key={item.name} whileHover={{ scale: 1.2 }}>
                    <Nav.Link href={item.href} className="mx-2">{item.name}</Nav.Link>
                  </motion.div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;