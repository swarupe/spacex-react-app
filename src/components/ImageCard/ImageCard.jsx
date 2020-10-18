import React, { Fragment } from "react";

const ImageCard = ({ imageDetails }) => {
  return (
    <Fragment>
      <img src={imageDetails.imageUrl} alt="Not loaded" />
      <div>{imageDetails.missionName + "#" + imageDetails.flightNumber}</div>
      <div>Mission Ids: {imageDetails.missionId}</div>
      <div>Launch Year: {imageDetails.launchYear}</div>
      <div>Successful Launch: {imageDetails.launchSuccess}</div>
      <div>Successful Landing: {imageDetails.successfulLanding}</div>
    </Fragment>
  );
};

export default ImageCard;
