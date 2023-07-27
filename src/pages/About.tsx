import { Container } from "@mui/material";
import { Row, Carousel, CarouselItem } from "react-bootstrap";

import Image1 from "../assets/about.jpg";
import Image2 from "../assets/styling.jpg";

export default function About() {

  return (
    <div>
      <div className="d-sm-block d-md-none" style={{ height: "6rem" }}></div>
      <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <div className="col-md-6 col-sm-12 align-items-center justify-content-center d-inline-flex">
              <Row>
                <h1>About Me</h1>
                <p className="h5">
                  Veniam dolor ullamco irure aliqua labore cupidatat ullamco mollit fugiat occaecat commodo velit sunt. Nostrud amet non velit aliqua qui magna nulla Lorem deserunt excepteur. Proident officia ex labore et adipisicing consectetur consequat. Cupidatat cupidatat consequat exercitation nulla occaecat et. Sint officia in velit enim anim eiusmod id nulla dolore voluptate ex eu nostrud id. Officia reprehenderit non occaecat ipsum pariatur et anim aliqua commodo adipisicing laborum sunt tempor occaecat.
                </p>
              </Row>
            </div>
            <div className="col-md-6 col-sm-12 align-items-center justify-content-center d-inline-flex">
              <img src={Image1} className="img-thumbnail h-75" />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}