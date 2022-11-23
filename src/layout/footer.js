import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="Footer" id="Footer">
        <div className="Footer_menu">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <img
                  src={require("../assets/images/logoblack.png") }
                  alt="logoblack"
                  className=""
                  width="130"
                />

                <p className="mb-0">
                  PISTA is an app for Live Vehicle Tracking, which makes your
                  life free from worries. It can help to track your vehicle Real
                  Time Tracking, Vehicle Trips Per Day, Parking Notification,
                  Fuel Detector, and many more. Hurry up and download the app
                  now!
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="Support">
                      <h5>Our Support</h5>
                      <p>You can call us / mail us for support.</p>
                      <ul className="supportPista">
                        <li>
                          <img
                            src={require("../assets/images/icons/phone.svg").default}
                            alt="phone"
                            className=""
                            width="18"
                          />
                          +91-8306007673
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/icons/mail.svg").default}
                            alt="facebook"
                            className=""
                          />
                          support@gopista.com
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="Footer_socialMedia">
                      <h5>Follow Us</h5>
                      <p>Get in touch with us on Social Media platforms.</p>
                      <ul className="socialMedia d-flex">
                        <li>
                          <a
                            href="https://www.facebook.com/PistaIndia/"
                            target="_blank"
                          >
                            <img
                              src={require("../assets/images/social/facebook.svg").default}
                              alt="facebook"
                              className=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/pistaindia/"
                            target="_blank"
                          >
                            <img
                              src={require("../assets/images/social/instagram.svg").default}
                              alt="instagram"
                              className=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/pistaindia/"
                            target="_blank"
                          >
                            <img
                              src={require("../assets/images/social/linkedin.svg").default}
                              alt="linkedin"
                              className=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="Footer_App_Download">
                      <h5>Download App</h5>
                      <p>Download PISTA App from Google play store.</p>
                      <a
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.pista.tracker"
                      >
                        <img
                          src={require("../assets/images/social/googleplaystore.png")}
                          alt="Brand"
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrightFooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0">
                  Copyright © 2022 GOPISTA. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="d-flex justify-content-evenly">
                  <li>
                    <a href="https://www.tractorjunction.com" target="_blank">
                      Tractor Junction
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
