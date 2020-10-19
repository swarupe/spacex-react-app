import React, { Fragment, useState, useEffect } from 'react';
import Button from '../../shared/Button/Button';

import './LaunchSuccessFilter.css';

const LaunchSuccessFilter = ({ queryParamsUpdate }) => {
    const [launchSuccess, setLaunchSuccess] = useState(null);

    useEffect(() => {
        queryParamsUpdate({ launch_success: launchSuccess });
    });

    return (
        <Fragment>
            <p className="success-launch-header">Successful Launch</p>
            <div className="success-launch-buttons-list">
                <div className="success-launch-button-left">
                    <Button
                        selected={launchSuccess === true}
                        onClick={setLaunchSuccess}
                        value={true}
                    >
                        True
                    </Button>
                </div>
                <div className="success-launch-button-right">
                    <Button
                        selected={launchSuccess === false}
                        onClick={setLaunchSuccess}
                        value={false}
                    >
                        False
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default LaunchSuccessFilter;
