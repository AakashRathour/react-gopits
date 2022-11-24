import React from "react";

const Subcard = (props) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="FeaturesSection">
          <img
            src={props.imagesrc}
            alt="Features"
            className="featureIconStroke"
            width="75"
            height="75"
          />

          <p className="FeaturesHeading">{props.heading}</p>
          <p className="FeaturesPara mb-0">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default Subcard;
