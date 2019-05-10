import React from 'react';
import { FieldArray, Formik, Form } from 'formik'

import STATES from 'config/states.json';
import COUNTRIES from 'config/countries.json';
import { createPartyValidationSchema } from './validation-schema';
import AppPanel from 'components/app-panel';
import InputWrapper from 'components/input-wrapper';
import Button from 'components/button';
import SelectWrapper from 'components/select-wrapper';
import { PARTY_DETAILS } from './mocks';

// TODO - Precompute these
const US_STATES = Object.keys(STATES).map(k => ({ label: STATES[k], value: k }));
const WORLD_COUNTRIES = COUNTRIES.map(({ name: label, code: value }) => ({ label, value }));
const USA_INDEX = WORLD_COUNTRIES.findIndex(c => c.value === 'US');
// TODO - Get these on login
const NETWORK_OPTIONS = [{ label: "Discover", value: "DN" }, { label: "Diners Club", value: "DCI" }];

const createPartyInitialValues = {
    partyName: '',
    networkId: '',
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

const updateField = setFieldValue => name => value => setFieldValue(name, value);

const renderPartyForm = ({ errors, touched, setFieldValue, values, setValues }) => {
    const setFormValue = updateField(setFieldValue);

    return (
        <Form>
            <InputWrapper label="Party Name" type="text" name="partyName" />
            <SelectWrapper
                label="Network"
                name="networkId"
                options={NETWORK_OPTIONS}
                onChange={setFormValue('networkId')} />

            <h3>Address:</h3>
            <InputWrapper label="Address Line 1" name="contactDetails.postalAddress.postalAddressLine1" />
            <InputWrapper label="Address Line 2" name="contactDetails.postalAddress.postalAddressLine2" />
            <InputWrapper label="Address Line 3" name="contactDetails.postalAddress.postalAddressLine3" />
            <InputWrapper label="City" name="contactDetails.postalAddress.city" />

            <SelectWrapper
                label="State"
                name="contactDetails.postalAddress.state"
                onChange={setFormValue('contactDetails.postalAddress.state')}
                options={US_STATES} />

            <InputWrapper label="ZIP Code" name="contactDetails.postalAddress.postalCode" />

            <SelectWrapper
                defaultValue={WORLD_COUNTRIES[USA_INDEX]}
                label="Country"
                name="contactDetails.postalAddress.country"
                onChange={setFormValue('contactDetails.postalAddress.country')}
                options={WORLD_COUNTRIES} />

            <h3>Contact Details</h3>

            <FieldArray
                name="contactDetails.eAddress"
                render={({ name }) => (
                    <InputWrapper name={`${name}[0].address`} label="Email Address: " />
                )} />

            <FieldArray
                name="contactDetails.teleAddress"
                render={({ name }) => (
                    <InputWrapper name={`${name}[0].telecommunicationNumber`} label="Telephone: " />
                )} />

            <Button type="submit">Save</Button>

            {values.debug &&
                <div>
                    <Button onClick={() => setValues({ ...values, ...PARTY_DETAILS })}>Quick Entry</Button>
                    <pre>
                        VALUES:
                        <br />
                        {JSON.stringify(values)}
                        <br />
                        ERRORS:
                        <br />
                        {JSON.stringify(errors)}
                        <br />
                        TOUCHED:
                        <br />
                        {JSON.stringify(touched)}
                    </pre>
                </div>
            }
        </Form>
    );
}

const CreateParty = ({ location, submitPartyForm }) => {
    const queryParams = new URLSearchParams(location.search);
    const debug = Boolean(queryParams.get('debug'));

    const initialValues = debug ?
        { debug, ...createPartyInitialValues } : createPartyInitialValues;

    return (
        <AppPanel name="Create Party">
            <section>
                <h2>Party Details</h2>
                <Formik
                    validationSchema={createPartyValidationSchema}
                    initialValues={initialValues}
                    render={renderPartyForm}
                    onSubmit={({ debug, ...values }) => submitPartyForm(values)} />
            </section>
        </AppPanel>
    );
}

export default CreateParty;
