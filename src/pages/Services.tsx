import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Product from "../assets/product.jpg";
import Room from "../assets/room.jpg";
import Room2 from "../assets/room2.jpg";
import Styling from "../assets/styling.jpg";



export default function Services() {
  return (
    <div className="bg-secondary">
      <div style={{ height: "5rem" }}></div>
      <div className="vh-100 vw-100">
        <Parallax pages={2} className="h-100" id="testing">
          <ParallaxLayer offset={0.1} speed={0.2} className="d-flex justify-content-center align-content-center">
            <img src={Product} className="p-img rounded-5" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.3} speed={0.6} className="d-flex justify-content-center align-content-center">
            <span className="display-1 text-light overlay-text inverse-text">Hair Products</span>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} className="d-flex justify-content-center align-content-center">
            <img src={Styling} className="p-img rounded-5" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={0.6} className="d-flex justify-content-center align-content-center">
            <span className="display-1 text-light overlay-text inverse-text">Hair Styling</span>
          </ParallaxLayer>
        </Parallax>
      </div>
      {/* {[
        {
          img: Product,
          text: "Products"
        }, 
        {
          img: Styling,
          text: "Styling"
        }
      ].map((image) => (
      ))} */}
    </div>
  );
}