import React from "react";

const Banner = () => {
  return (
    <>
      <section className="Banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <div className="Banner_Content">
                <h1>GPS TRACKING SOFTWARE</h1>
                <p>Are You Searching for a Live Vehicle Tracking Device?</p>
                <p>
                  Yes, then you can find here what you want. PISTA GPS Tracker
                  comes with various unique features that monitor your vehicle’s
                  real time location. Now you don’t have to worry about your
                  vehicle, GPS Tracking Software helps you to always stay in
                  touch with your vehicle.
                </p>
                <p>
                  We very well know that you treat your vehicle like a family
                  member, just like that we see you as our family member. That’s
                  why we are here with this real time tracking device that will
                  forget all your bother about stealing your vehicle. We always
                  do work for the betterment of the Indian people
                  <a
                    href="/"
                    target="_blank"
                  >
                     PISTA GPS Tracker
                  </a>
                  is the next step in that.
                </p>
                <p>
                  PISTA GPS Tracker comes with awesome features i.e. Live
                  Vehicle Tracking, Real Time Tracking, Show Vehicle Trips Per
                  Day, Parking Notification, and Fuel Detector. Along with this,
                  this GPS tracking software has some other advanced features
                  that will surely help to reduce stress about your vehicle. If
                  you want to run with this tech-savvy world without any worry,
                  then PISTA GPS Tracker is the best deal for you.
                </p>

                <div className="Google_Icon">
                  <a
                    href="/"
                    target="_blank"
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
            <div className="col-sm-4">
              <div className="Banner-Image">
              <img
                      src={require("../assets/images/bannerimg1.png")}
                      alt="Brand"
                      className=""
                      width="100%"
                    />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
