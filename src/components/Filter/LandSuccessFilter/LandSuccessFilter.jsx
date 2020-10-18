import React, { Fragment, useState, useEffect } from 'react';
import Button from '../../shared/Button/Button';

const LandSuccessFilter = ({ queryParamsUpdate }) => {
    const [landSuccess, setLandSuccess] = useState(false);

    useEffect(() => {
        queryParamsUpdate({ land_success: landSuccess });
    });

    return (
        <Fragment>
            <p>Successful Landing</p>
            <Button
                selected={landSuccess === true}
                onClick={setLandSuccess}
                value={true}
            >
                True
            </Button>
            <Button
                selected={landSuccess === false}
                onClick={setLandSuccess}
                value={false}
            >
                False
            </Button>
        </Fragment>
    );
};

export default LandSuccessFilter;
