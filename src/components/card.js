import React from "react";
import Subcard from "./subcard";
// import logo from "../assets/images/partners/airtel.png";

const Card = (props) => {
  return (
    <>
      <section className="Features" id="Features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sectionMainHeading text-center">
                <h2>Glimpse of PISTA Features</h2>
                <p className="mb-0">
                  Below are some fantastic features of the PISTA GPS Tracker.
                </p>
              </div>
            </div>
            {/* <Subcard /> */}
            <Subcard
            imagesrc={require('../assets/images/partners/airtel.png')}
              heading="Fuel Detector"
              title="Map devices location through Mobile Apps and Web portal Monitor location of objects in real time."
            />

            <Subcard
              heading="Fuel Detector"
              title="Map devices location through Mobile Apps and Web portal Monitor location of objects in real time."
            />

            <Subcard
              heading="Fuel Detector"
              title="Map devices location through Mobile Apps and Web portal Monitor location of objects in real time."
            />
            <Subcard
              heading="Fuel Detector"
              title="Map devices location through Mobile Apps and Web portal Monitor location of objects in real time."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
