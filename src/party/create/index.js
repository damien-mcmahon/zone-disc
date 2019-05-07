import React from 'react';
import { FieldArray, Formik, Form } from 'formik'
import * as Yup from 'yup';

import AppPanel from '../../components/app-panel';
import InputWrapper from '../../components/input-wrapper';
import SelectWrapper from '../../components/select-wrapper';

const US_POSTAL_CODE_REGEX = /^\d{5}(?:[-\s]\d{4})?$/gim;
const US_STATES = [
    {label: "Arizona", value: "AZ"},
    {label: "Michigan", value: "MG"}
];

const WORLD_COUNTRIES = [
    {label: 'United States', value: 'US' },
    {label: 'Afghanistan', value: 'AG'},
    {label: 'Australia', value: 'AU'},
    {label: 'Austria', value: 'AT'}
];
const NETWORK_OPTIONS = [
    {label: "Discover", value: "DN"},
    {label: "Diners Club", value: "DCI"}
];
const eAddressSchema = Yup.object().shape({
    address: Yup.string().email('Please enter a correct email address').required('Email address is required'),
    addressType: Yup.string()
});

const teleAddressSchema = Yup.object().shape({
    telecommunicationNumber: Yup.string().required('Tele Address is required'),
    telecomType: Yup.string(),
    extension: Yup.string()
});

const eAddressForm = values => props => {
    const { name } = props
    const addresses = values[name] || [];

    console.log("DM => EE", name, values);

    return (
        <div>
            {addresses.map(index => (
            <InputWrapper 
                key={index} 
                name={`${name}[${index}].address`} 
                label="Email Address: " />
            ))}
        </div>
    );
}

const createPartyValidationSchema = Yup.object().shape({
    partyName: Yup.string().required('Please enter a party name'),
    networkId: Yup.string().required('Please select the network for this party'),
    contactDetails: Yup.object().shape({
        contactType: Yup.string().required('Please enter a contact type'),
        postalAddress: Yup.object().shape({
            postalAddressLine1: Yup.string().required('Please enter the first line of the address'),
            postalAddressLine2: Yup.string(),
            postalAddressLine3: Yup.string(),
            city: Yup.string().required('Please enter the city for the party'),
            state: Yup.string().required('Please enter the state'),
            postalCode: Yup.string().matches(US_POSTAL_CODE_REGEX, 'Please enter a correct ZIP Code'),
            country: Yup.string().default('USA')
        }),
        eAddress: Yup.array().of(eAddressSchema),
        teleAddress: Yup.array().of(teleAddressSchema)
    })
});

const createPartyInitialValues = {
    partyName: '',
    networkId: '',
    contactDetails: {
        contactType: '',
        postalAddress: {
            postalAddressLine1: '',
            postalAddressLine2: '',
            postalAddressLine3: '',
            city: '',
            state: '',
            postalCode: '',
            country: ''
        },
        eAddress: [],
        teleAddress: []
    }
};

const updateField = setFieldValue => name => value => setFieldValue(name, value);

const renderPartyForm = ({setFieldValue, values}) => {
    const setFormValue = updateField(setFieldValue);

    return (
        <Form>
            {JSON.stringify(values)}
            <InputWrapper label="Party Name" type="text" name="partyName" />
            <SelectWrapper 
                label="Network" 
                name="networkId" 
                options={NETWORK_OPTIONS} 
                onChange={setFormValue('networkId')}/>

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
                defaultValue={WORLD_COUNTRIES[0]} 
                label="Country" 
                name="contactDetails.postalAddress.country" 
                onChange={setFormValue('contactDetails.postalAddress.country')}
                options={WORLD_COUNTRIES} />

            <h3>Contact Details</h3>

            <FieldArray name="contactDetails.eAddress" render={eAddressForm(values)}/>

            <button type="submit">Save</button>
        </Form>
    );
}

const CreateParty = ({submitPartyForm}) => (
    <AppPanel name="Create Party">
        <section>
            <h2>Party Details</h2>
            <Formik 
                validationSchema={createPartyValidationSchema}
                initialValues={createPartyInitialValues}
                render={renderPartyForm}
                submit={submitPartyForm} />
        </section>
    </AppPanel>
);

export default CreateParty;
