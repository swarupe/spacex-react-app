import React, { Fragment } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ProgramList.css';

const ProgramList = ({ programs }) => {
    const renderPrograms = (programsList) => {
        if (programsList && programsList.length > 0) {
            return (
                <div className="card-grid">
                    {programsList.map((program) => {
                        const imageDetails = {
                            imageUrl: program.links.mission_patch_small,
                            missionName: program.mission_name,
                            flightNumber: program.flight_number,
                            launchYear: program.launch_year,
                            launchSuccess: program.launch_success,
                            successfulLanding:
                                program.rocket.first_stage.cores[0]
                                    .land_success,
                            missionId: program.mission_id,
                        };
                        return (
                            <div
                                className="program-card"
                                key={program.flight_number}
                            >
                                <ImageCard imageDetails={imageDetails} />
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    };

    return <Fragment>{renderPrograms(programs)}</Fragment>;
};

export default ProgramList;
