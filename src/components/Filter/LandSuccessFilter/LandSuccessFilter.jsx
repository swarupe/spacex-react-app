import React, { Fragment, useState, useEffect } from 'react';
import Button from '../../shared/Button/Button';

import './LandSuccessFilter.css';

const LandSuccessFilter = ({ queryParamsUpdate }) => {
    const [landSuccess, setLandSuccess] = useState(null);

    useEffect(() => {
        queryParamsUpdate({ land_success: landSuccess });
    });

    return (
        <Fragment>
            <p className="success-land-header">Successful Landing</p>
            <div className="success-land-buttons-list">
                <div className="success-land-button-left">
                    <Button
                        selected={landSuccess === true}
                        onClick={setLandSuccess}
                        value={true}
                    >
                        True
                    </Button>
                </div>
                <div className="success-land-button-right">
                    <Button
                        selected={landSuccess === false}
                        onClick={setLandSuccess}
                        value={false}
                    >
                        False
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default LandSuccessFilter;
