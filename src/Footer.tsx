import pages from "./Pages";

export default function Footer() {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0 bg-primary">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">Karina Hair & Salon</h5>
              <p className="small text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-secondary mb-0">
                © Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 text-secondary">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled">
                {pages.map((item) => {
                  return (
                    <span key={item.name}>
                      <li>
                        <a href={item.href} className="text-secondary">{item.name}</a>
                      </li>
                    </span>
                  );
                })}
              </ul>
            </div>
            {/* <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
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
              </form>
            </div> */}
          </div>
        </div>
      </footer>


    </>
  );
}