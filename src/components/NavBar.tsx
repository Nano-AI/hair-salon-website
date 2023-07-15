import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion, useViewportScroll } from 'framer-motion';
import { useState, useEffect } from "react";
import Logo from '../assets/logo_notext.png'
import pages from '../Data';
import { Link } from 'react-router-dom';

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
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  })

  return (
    <motion.div className="fixed-top" variants={variants} animate={hidden ? "hidden" : "visible"} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
      <Navbar expand="lg" className="bg-primary bg-navbar" sticky="top" fixed="top">
        <Container className="my-2">
          <Navbar.Brand href="#home"><img src={Logo} className="img-logo invert" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-items-end justify-end">
            <Nav className="me-auto w-100">
              {pages.map((item) => {
                return (
                  <motion.div key={item.name} whileHover={{ scale: 1.2 }} className={item?.right ? "ms-lg-auto ms-md-auto ms-sm-none" : ""}>
                    <Link to={item.href} className="text-decoration-none "><p className="h4 p-0 m-0 text-light mx-3">{item.name}</p></Link>
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