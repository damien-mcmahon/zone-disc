import React, { Fragment, useState } from 'react'
import { func, array} from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import InputWrapper from '../input-wrapper';
import Button from '../button';

import './styles.scss';

const has = val => val && val.length > 0;
const searchInitialValues = { search: '' };
const searchValidationSchema = Yup.object().shape({
    search: Yup.string()
        .min(2, 'Please enter 2 characters')
        .required('Please enter a search term')
});
    
const Search = ({results, onSearch, clearResult}) => {
    const [isSearching, setIsSearching] = useState(false);
    const autoCompleteClasses = classnames('search__autocomplete-wrapper', {
        '--has-results': has(results)
    });


    return (
        <div className="search__wrapper">
            <Formik
                initialValues={searchInitialValues}
                validationSchema={searchValidationSchema}
                onSubmit={({search}) => {
                    onSearch(search);
                    setIsSearching(true);
                }}>

                {({handleReset}) => {
                    const resetForm = () => {
                        setIsSearching(false);
                        handleReset();
                    };

                    return (
                    <Form className="search__form-wrapper">
                        <div className={autoCompleteClasses}>
                            <InputWrapper className="search__input"  name="search" />

                            {isSearching &&
                                <div className="search__results-wrapper">
                                    {has(results) ? (
                                        <Fragment>
                                            {results.map(r => (
                                                <div key={r.id} className="search__result">
                                                    <Link className="search__link" to={`/party/${r.id}`} onClick={clearResult}>
                                                        {r.partyName}
                                                    </Link>
                                                </div>
                                            ))}
                                            <div 
                                                onClick={() => resetForm()}
                                                className="search__result --clear">Clear Search</div>
                                        </Fragment>
                                    ) : (
                                        <div 
                                            onClick={() => resetForm()} 
                                            className="search__result --no-results">Nothing Found</div>
                                    )}
                                </div>
                            }
                        </div>
                        <Button className="search__button">Search</Button>
                    </Form>
                )}}
            </Formik>
        </div>
    );
}

Search.propTypes = {
    results: array,
    onSearch: func.isRequired
};

export default Search;