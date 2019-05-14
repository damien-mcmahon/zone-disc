import React from 'react';
import { FieldArray, Formik, Form } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import STATES from 'config/states.json';
import COUNTRIES from 'config/countries.json';
import { createPartyValidationSchema } from './validation-schema';
import AppPanel from 'components/app-panel';
import InputWrapper from 'components/input-wrapper';
import Button from 'components/button';
import Card from 'components/card';
import Fieldset from 'components/fieldset';
import SelectWrapper from 'components/select-wrapper';

import './styles.scss';

// TODO - Precompute these
const US_STATES = Object.keys(STATES).map(k => ({ label: STATES[k], value: k }));
const WORLD_COUNTRIES = COUNTRIES.map(({ name: label, code: value }) => ({ label, value }));
const USA_INDEX = WORLD_COUNTRIES.findIndex(c => c.value === 'US');
const CURRENCIES = [
    {label: 'US Dollars', value: 'USD'},
    {label: 'British Pounds', value: 'GBP'},
    {label: 'Canadian Dollars', value: 'CAD'}
];

const DCI = 'DCI';

const createPartyInitialValues = {
    partyName: '',
    primaryContactName: '',
    currencyCode: 'USD',
    contactDetails: {
        contactType: 'PERSON',
        postalAddress: {
            postalAddressLine1: '',
            postalAddressLine2: '',
            postalAddressLine3: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        eAddress: [{
            address: '',
            addressType: ''
        }],
        teleAddress: [{
            telecommunicationNumber: '',
            telecomType: '',
            extension: ''
        }]
    }
};

const createHelp = {
    name: 'main-help',
    content: 'Creating a party requires the following information',
    children: <FontAwesomeIcon icon="question-circle" />
}

const updateField = setFieldValue => name => value => setFieldValue(name, value);

const renderPartyForm = ({ errors, touched, setFieldValue, values, setValues }) => {
    const setFormValue = updateField(setFieldValue);

    return (
        <Form className="create-party__form">
            <Fieldset className="create-party__inline-fields">
                <InputWrapper 
                    label="Business Name" 
                    required name="partyName" 
                    errors={errors} />

                <InputWrapper 
                    label="Primary Contact Name" 
                    required  
                    name="primaryContactName" 
                    errors={errors} />
            </Fieldset>

            <Fieldset className="create-party__address-info">
                <SelectWrapper
                    defaultValue={WORLD_COUNTRIES[USA_INDEX]}
                    required
                    label="Country"
                    errors={errors}
                    className="create-party__country-select"
                    name="contactDetails.postalAddress.country"
                    onChange={setFormValue('contactDetails.postalAddress.country')}
                    options={WORLD_COUNTRIES} />

                <div className="create-party__inline-fields">
                    <InputWrapper 
                        errors={errors}
                        required
                        label="Street Name and Number" 
                        name="contactDetails.postalAddress.postalAddressLine1" />
                    <InputWrapper 
                        label="Street Address 2" 
                        errors={errors}
                        name="contactDetails.postalAddress.postalAddressLine2" />
                </div>

                <InputWrapper 
                    errors={errors}
                    required
                    label="City" 
                    name="contactDetails.postalAddress.city" />

                <SelectWrapper
                    errors={errors}
                    required
                    label="State"
                    name="contactDetails.postalAddress.state"
                    onChange={setFormValue('contactDetails.postalAddress.state')}
                    options={US_STATES} />

                <InputWrapper 
                    errors={errors}
                    label="ZIP Code" 
                    required
                    name="contactDetails.postalAddress.postalCode" />

                <FieldArray
                    name="contactDetails.teleAddress"
                    render={({ name }) => (
                        <InputWrapper 
                            errors={errors}
                            name={`${name}[0].telecommunicationNumber`} 
                            label="Telephone: " />
                    )} />

                <FieldArray
                    name="contactDetails.eAddress"
                    render={({ name }) => (
                        <InputWrapper 
                            errors={errors}
                            name={`${name}[0].address`} 
                            label="Email Address: " />
                    )} />
            </Fieldset>

            <Fieldset className="create-party__inline-fields">
                <SelectWrapper
                    errors={errors}
                    required
                    label="Currency Code"
                    name="contactDetails.postalAddress.state"
                    onChange={setFormValue('currencyCode')}
                    options={CURRENCIES} />

                {values.networkId === DCI &&
                    <InputWrapper
                        label="DXS Code"
                        name="DXSCode"
                        errors={errors} />
                }
            </Fieldset>

            <Fieldset>
                <Card className="create-party__upload" applyHoverStyle={false} depth={1}>
                    <h2 className="upload__label">Upload Files</h2>
                    <h3 className="upload__label-meta">(2MB maximum per file)</h3>
                    <Button disabled className="upload__button" state="secondary">Choose Files</Button>
                </Card>
            </Fieldset>

            <Button type="submit">Save</Button>
        </Form>
    );
}

const CreateParty = ({ networkId, submitPartyForm }) => {
    const initialValues = networkId ?
        { networkId, ...createPartyInitialValues } : createPartyInitialValues;

    return (
        <AppPanel title="Create Party" help={createHelp}>
            <section>
                <Formik
                    validationSchema={createPartyValidationSchema}
                    initialValues={initialValues}
                    render={renderPartyForm}
                    onSubmit={({ values }) => submitPartyForm(values)} />
            </section>
        </AppPanel>
    );
}

export default CreateParty;
