import React from 'react';
import LandSuccessFilter from './LandSuccessFilter/LandSuccessFilter';
import LaunchSuccessFilter from './LaunchSuccessFilter/LaunchSuccessFilter';
import LaunchYearFilter from './LaunchYearFilter/LaunchYearFilter';

import './Filter.css';

const Filter = ({ queryParamsUpdate }) => {
    return (
        <div className="filter">
          <h3>Filters</h3>
          <div className="filter-list">
            <LaunchYearFilter queryParamsUpdate={queryParamsUpdate} />
            <LaunchSuccessFilter queryParamsUpdate={queryParamsUpdate} />
            <LandSuccessFilter queryParamsUpdate={queryParamsUpdate} />
            </div>
        </div>
    );
};

export default Filter;
