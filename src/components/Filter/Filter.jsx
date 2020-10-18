import React, { Fragment } from 'react';
import LandSuccessFilter from './LandSuccessFilter/LandSuccessFilter';
import LaunchSuccessFilter from './LaunchSuccessFilter/LaunchSuccessFilter';
import LaunchYearFilter from './LaunchYearFilter/LaunchYearFilter';

const Filter = ({queryParamsUpdate}) => {
    return (
        <Fragment>
            <LaunchYearFilter queryParamsUpdate={queryParamsUpdate}/>
            <LaunchSuccessFilter queryParamsUpdate={queryParamsUpdate}/>
            <LandSuccessFilter queryParamsUpdate={queryParamsUpdate}/>
        </Fragment>
    );
};

export default Filter;
