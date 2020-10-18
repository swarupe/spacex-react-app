import React, { Fragment, useState, useEffect } from 'react';
import Button from '../../shared/Button/Button';

const LaunchSuccessFilter = ({ queryParamsUpdate }) => {
    const [launchSuccess, setLaunchSuccess] = useState(null);

    useEffect(() => {
        queryParamsUpdate({ launch_success: launchSuccess });
    });

    return (
        <Fragment>
            <p>Successful Launch</p>
            <Button
                selected={launchSuccess === true}
                onClick={setLaunchSuccess}
                value={true}
            >
                True
            </Button>
            <Button
                selected={launchSuccess === false}
                onClick={setLaunchSuccess}
                value={false}
            >
                False
            </Button>
        </Fragment>
    );
};

export default LaunchSuccessFilter;
