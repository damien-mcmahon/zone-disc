import React, { Fragment, useState } from 'react'
import { string, func, array} from 'prop-types';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import InputWrapper from '../input-wrapper';
import Button from '../button';
import { has } from 'utils';

import { ACCOUNT_MAINTENANCE_ID, replaceParam} from '../../config/routes';

import './styles.scss';

const Search = ({currentSearch = '', results, onSearch, onSelect}) => {
    const [isSearching, setIsSearching] = useState(false);
    const autoCompleteClasses = classnames('search__autocomplete-wrapper', {
        '--has-results': has(results)
    });

    const searchInitialValues = { search: currentSearch };

    return (
        <div className="search__wrapper">
            <Formik
                enableReinitialize
                initialValues={searchInitialValues}
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
                            <InputWrapper 
                                className="search__input"  
                                name="search" />

                            {isSearching &&
                                <div className="search__results-wrapper">
                                    {has(results) ? (
                                        <Fragment>
                                            {results.map(r => (
                                                <div key={r.id} className="search__result">
                                                    <Link className="search__link" to={replaceParam(ACCOUNT_MAINTENANCE_ID.path, r.id)} onClick={() => onSelect(r)}>
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
    onSearch: func.isRequired,
    currentSearch: string,
    onSelect: func
};

export default Search;