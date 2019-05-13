import React from 'react';
import { Form } from 'formik';

import InputWrapper from 'components/input-wrapper';
import Button from 'components/button';

import './styles.scss';

const SearchForm = () => (
    <Form className="dashboard-search__wrapper">
        <InputWrapper className="dashboard-search__input"  name="search" />
        <Button className="dashboard-search__button">Search</Button>
    </Form>
);

export default SearchForm