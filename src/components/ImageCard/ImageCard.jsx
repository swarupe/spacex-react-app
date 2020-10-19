import React from 'react';

import './ImageCard.css';

const ImageCard = ({ imageDetails }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageDetails.imageUrl} alt="Not loaded" />
            </div>
            <div className="card-name">
                {imageDetails.missionName + '#' + imageDetails.flightNumber}
            </div>
            {imageDetails.missionId && imageDetails.missionId.length > 0 && (
                <div className="card-data-item">
                    <span className="card-data-item-label">Mission Ids:</span>
                    <span className="card-data-item-value">
                        <ul>
                            {imageDetails.missionId.map((missionId) => (
                                <li key={missionId}>{missionId}</li>
                            ))}
                        </ul>
                    </span>
                </div>
            )}
            <div className="card-data-item">
                <span className="card-data-item-label">Launch Year:</span>
                <span className="card-data-item-value">
                    {imageDetails.launchYear}
                </span>
            </div>
            <div className="card-data-item">
                <span className="card-data-item-label">Successful Launch:</span>
                <span className="card-data-item-value">
                    {imageDetails.launchSuccess ? 'true' : 'false'}
                </span>
            </div>
            <div className="card-data-item">
                <span className="card-data-item-label">
                    Successful Landing:
                </span>
                <span className="card-data-item-value">
                    {imageDetails.successfulLanding ? 'true' : 'false'}
                </span>
            </div>
        </div>
    );
};

export default ImageCard;
