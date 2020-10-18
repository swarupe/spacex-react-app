import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../shared/Button/Button';

const generateLaunchYearButtons = (selectedYear, updateState) => {
    let launchYearList = [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2018,
        2019,
        2020,
    ];

    return (
        <div>
            {launchYearList.map((launchYear, index) => {
                return (
                    <div key={index}>
                        <Button
                            selected={launchYear === selectedYear}
                            onClick={updateState}
                            value={launchYear}
                        >
                            {launchYear}
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

const LaunchYearFilter = ({ queryParamsUpdate }) => {
    const [launchYear, setLaunchYear] = useState(null);

    useEffect(() => {
        queryParamsUpdate({ launch_year: launchYear });
    });

    return (
        <Fragment>
            <p>Launch Year</p>
            {generateLaunchYearButtons(launchYear, setLaunchYear)}
        </Fragment>
    );
};

export default LaunchYearFilter;
