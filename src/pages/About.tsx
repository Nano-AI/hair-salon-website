import { Container } from "@mui/material";
import { Row } from "react-bootstrap";

export default function About() {

  return (
    <div className="vh-100 w-100">
      <Container className="h-100 w-100">
        <Row className="h-100 w-100">
            <div className="col-md-5 col-sm-12 m-5">
              <br />
              <br />
              <h1 className="display-1">Who am I?</h1>
              <p className="h3">Non occaecat officia velit esse ad exercitation quis dolore ex dolore. Pariatur voluptate sit excepteur id aute fugiat dolore sunt sunt et et duis. In consectetur occaecat consequat aute. In sunt dolor cupidatat consequat consequat mollit enim. Duis ut voluptate velit ipsum elit labore est anim. Laborum cillum deserunt esse laboris incididunt sit qui aliquip. Sint labore excepteur ad velit veniam nisi culpa.</p>
            </div>
            <div className="col-md-6 col-sm-12 h-100">
              <div className="h-100 bg-black w-100"></div>
            </div>
        </Row>
      </Container>
    </div>
  );
}