import React from 'react'
import { func, array} from 'prop-types';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import InputWrapper from 'components/input-wrapper';
import Button from 'components/button';

const has = val => val && val.length > 0;

const renderSearchForm = () => {
    return (
        <Form className="dashboard-search__wrapper">
            <InputWrapper className="dashboard-search__input"  name="search" />
            <Button className="dashboard-search__button">Search</Button>
        </Form>
    )
};

const searchInitialValues = {
    search: ''
};
    
const Search = ({results, onSearch, clearResult}) => {
    return (
        <div className="search__wrapper">
            <Formik
                initialValues={searchInitialValues}
                onSubmit={onSearch}
                render={renderSearchForm}
                />
            {has(results) &&
                <div className="search__results-wrapper">
                    {results.map(r => (
                        <div key={r.id} className="search__result">
                            <Link to={`/party/${r.id}`} onClick={clearResult}>
                                {r.partyName}
                            </Link>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}

Search.propTypes = {
    results: array,
    onChange: func.isRequired
};

export default Search;