import React, { useState, useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

import Filter from './Filter/Filter';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProgramList from './ProgramList/ProgramList';
import history from '../history';

import './App.css';

const App = () => {
    const [programs, setPrograms] = useState([]);
    const [queryParamString, setQueryParamString] = useState(null);

    const generateQueryString = (obj) => {
        const lastQueryParams = queryString.parse(queryParamString);

        const queryObj = {};
        for (const key in lastQueryParams) {
            if (
                lastQueryParams[key] !== null &&
                lastQueryParams[key] !== 'null'
            ) {
                queryObj[key] = lastQueryParams[key];
            }
        }
        for (const key in obj) {
            if (obj[key] !== null && obj[key] !== 'null') {
                queryObj[key] = obj[key];
            } else if (key in queryObj) {
                delete queryObj[key];
            }
        }

        const string = new URLSearchParams(queryObj);
        const queryParam = string.toString();
        setQueryParamString(queryParam);
        if (queryParam) {
            history.push(`/${queryParam}`);
        } else {
            history.push('/');
        }
    };

    useEffect(() => {
        (async () => {
            const queryParams = queryString.parse(queryParamString);
            const { data } = await axios.get(
                'https://api.spacexdata.com/v3/launches',
                {
                    params: {
                        limit: 100,
                        ...queryParams,
                    },
                }
            );
            if (data && data.length > 0) {
                setPrograms(data);
            }
        })();
    }, [queryParamString]);

    console.log(programs);
    return (
        <div className="container">
            <Router history={history}>
                <Header />
                <div className="content">
                    <div className="content-wrap">
                        <div className="content-filter">
                            <Filter queryParamsUpdate={generateQueryString} />
                        </div>
                        <Route path="/">
                            <ProgramList programs={programs} />
                        </Route>
                    </div>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
