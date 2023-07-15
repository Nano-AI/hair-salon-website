import './App.css'
import Room from "../assets/room.jpg";
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion, useViewportScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Container } from '@mui/material';

import ScheduleIcon from "@mui/icons-material/Schedule";
import PlaceIcon from '@mui/icons-material/Place';

import { HashLink } from 'react-router-hash-link';

const imageStyle = {
  background: `url(${Room}) no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
};

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY: any = useViewportScroll().scrollY;
  const buttonRef: any = useRef(0);

  function update() {
    if (buttonRef.current?.offsetTop > scrollY?.current && isOpen) {
      setIsOpen(false);
    }
    if (buttonRef.current?.offsetTop < scrollY?.current && !isOpen) {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  console.log(import.meta.env)

  return (
    <>
      <div className="vh-100 w-100" style={imageStyle}>
        <div className="h-100 w-100 d-flex justify-content-center align-items-center overlay text-light">
          <div className="m-5 text-center">
            <h1 className="display-1 justify-content-center">Karina Hair & Beauty</h1>
            <p className="d-flex justify-content-center h2">We offer&nbsp;
              <Typewriter
                options={{
                  strings: ['hair extensions', 'bridal services', 'excellence', 'more'],
                  autoStart: true,
                  loop: true
                }}
              />
            </p>
          </div>
          <motion.div className="bottom-0 m-5 position-absolute" role="button"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            whileHover={{ scale: 1.5 }}
            ref={buttonRef}
          >
            <HashLink smooth={true} to="#details" className="text-decoration-none"><KeyboardArrowDownIcon className="icon-md text-light" onClick={() => setIsOpen(isOpen => !isOpen)} /></HashLink>
          </motion.div>
        </div>
      </div>
      <Container className="my-4">
        <div className="row text-center justify-content-center align-content-center my-4 py-3 bg-primary-25 rounded-3" id="details">
          <div className="row col-lg-6 col-md-12 tex-center justify-content-center align-content-center">
            <ScheduleIcon className="col-4 icon-lg" />
            <div className="col-8">
              <h2>Opening Times</h2>
              <p>Monday - Friday: 1pm-6pm</p>
            </div>
          </div>
          <div className="row col-lg-6 col-md-12 text-center justify-content-center align-content-center">
            <PlaceIcon className="col-4 icon-lg" />
            <div className="col-8">
              <h2>Location</h2>
              <p>220 Rainier Blvd N Suite 2, Issaquah, WA 98027</p>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.798075868678!2d-122.03815562320538!3d47.53279409307074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906fb8b1af5c37%3A0xfc6740ecb421fa61!2sKarina%20Hair%20%26%20Beauty!5e0!3m2!1sen!2sus!4v1689299246899!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}

export default Home;
