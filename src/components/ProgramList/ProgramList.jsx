import React, { Fragment } from "react";
import ImageCard from "../ImageCard/ImageCard";

const ProgramList = ({ programs }) => {
  console.log(programs)
  const renderPrograms = (programsList) => {
    if (programsList && programsList.length > 0) {
      return (
        <Fragment>
          {programsList.map((program) => {
            // const imageDetails = {
            //   imageUrl: program.links.mission_patch_small,
            //   missionName: program.mission_name,
            //   flightNumber: program.flight_number,
            //   launchYear: program.launch_year,
            //   launchSuccess: program.launch_success,
            //   successfulLanding: program.rocket.first_stage.cores,
            //   missionId: program.mission_id
            // }
            return <ImageCard key={program.flight_number} imageUrl={program.links.mission_patch_small}/>;
          })}
        </Fragment>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  return <div>{renderPrograms(programs)}</div>;
};

export default ProgramList;
