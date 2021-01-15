import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col span-1-of-2">
            <ul className="footer-nav">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">iOS App</a>
              </li>
              <li>
                <a href="#">Android App</a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-2">
            <ul className="social-links">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook" className="facebook-icon"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#">
                  <ion-icon name="logo-twitter" className="twitter-icon"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#">
                  <ion-icon name="logo-googleplus" className="googleplus-icon"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#">
                  <ion-icon name="logo-instagram" className="instagram-icon"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>Copyright &copy; 2021 | ZBlock | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
