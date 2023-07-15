import { Link } from "react-router-dom";
import pages from "../Data";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0 bg-primary">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">Karina Hair & Salon</h5>
              <p className="small text-secondary">
                <Button className="btn-link text-secondary" href="tel:123-456-789"><b>Phone:</b> +1 (123)-456-7890</Button>
                <br/>
                <Button className="btn-link text-secondary" href="mailto:testing@email.com" target="_blank"><b>Email:</b> testing@email.com</Button>
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-secondary mb-0">
                © Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-3 text-secondary">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled">
                {pages.map((item) => {
                  return (
                    <span key={item.name}>
                      <li>
                        <Link to={item.href} className="text-secondary">{item.name}</Link>
                      </li>
                    </span>
                  );
                })}
              </ul>
            </div>
            {/* <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Socials</h5>
              <div className="list-unstyled text-secondary">
                yo
              </div>
            </div> */}
            <div className="col-lg-2 col-md-3">
              <h5 className="text-white mb-3">Socials</h5>
              <p className="small text-muted">
                <Button className="btn bg-secondary py-1 px-2" target={"_blank"} href="https://www.facebook.com/KarinaHairandbeauty/"><FacebookIcon className="icon-sm" style={{color: "#4267B2"}} /></Button> 
              </p>
              {/* <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}