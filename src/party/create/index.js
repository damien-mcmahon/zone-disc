import React from 'react';
import { FieldArray, Formik, Form } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { optionise } from 'utils';
import { createPartyValidationSchema } from './validation-schema';
import AppPanel from 'components/app-panel';
import InputWrapper from 'components/input-wrapper';
import Button from 'components/button';
import Card from 'components/card';
import Fieldset from 'components/fieldset';
import SelectWrapper from 'components/select-wrapper';

import './styles.scss';

const DCI = 'DCI';

const createPartyInitialValues = {
    partyName: '',
    primaryContactName: '',
    currencyCode: ['USD'],
    statusName: 'Awaiting Approval',
    networkId: '',
    contactDetails: {
        contactType: 'preferred',
        postalAddress: {
            postalAddressLine1: '',
            postalAddressLine2: '',
            postalAddressLine3: '',
            city: '',
            state: '',
            postalCode: '',
            country: 'US'
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
    children: <FontAwesomeIcon className="create-party__help-icon" icon="question-circle" />
}

const updateField = setFieldValue => name => value => setFieldValue(name, value);

const renderPartyForm = (countries, currencies, states, currentCountryIndex, networks, user) => ({ errors, setFieldValue, touched, values, setValues }) => {
    const setFormValue = updateField(setFieldValue);

    const userNetworks = user.networks.map(optionise('name', 'shortCode'));

    return (
        <Form className="create-party__form">
            <Fieldset className="create-party__tenant-select">
                <SelectWrapper
                    touched={touched}
                    label="Select Tenant"
                    name="networkId" 
                    options={networks}
                    onChange={setFormValue('networkId')}
                    defaultValue={userNetworks[0]}
                    isDisabled={user.networks.length === 1}/>
            </Fieldset>
            
            <Fieldset className="create-party__inline-fields">
                <InputWrapper 
                    touched={touched}
                    label="Business Name" 
                    required name="partyName" 
                    errors={errors} />

                <InputWrapper 
                    label="Primary Contact Name" 
                    touched={touched}
                    required  
                    name="primaryContactName" 
                    errors={errors} />
            </Fieldset>

            <Fieldset className="create-party__address-info">
                <SelectWrapper
                    defaultValue={countries[currentCountryIndex]}
                    required
                    label="Country"
                    errors={errors}
                    touched={touched}
                    className="create-party__country-select"
                    name="contactDetails.postalAddress.country"
                    onChange={setFormValue('contactDetails.postalAddress.country')}
                    options={countries} />

                <div className="create-party__inline-fields">
                    <InputWrapper 
                        touched={touched}
                        errors={errors}
                        required
                        label="Street Address 1" 
                        name="contactDetails.postalAddress.postalAddressLine1" />

                    <InputWrapper 
                        label="Street Address 2 (Optional)" 
                        touched={touched}
                        errors={errors}
                        name="contactDetails.postalAddress.postalAddressLine2" />
                </div>

                <InputWrapper 
                    errors={errors}
                    touched={touched}
                    required
                    label="City" 
                    name="contactDetails.postalAddress.city" />

                <SelectWrapper
                    errors={errors}
                    touched={touched}
                    required
                    label="State"
                    name="contactDetails.postalAddress.state"
                    onChange={setFormValue('contactDetails.postalAddress.state')}
                    options={states} />

                <InputWrapper 
                    errors={errors}
                    touched={touched}
                    label="ZIP Code" 
                    required
                    name="contactDetails.postalAddress.postalCode" />

                <FieldArray
                    name="contactDetails.teleAddress"
                    render={({ name }) => (
                        <InputWrapper 
                            touched={touched}
                            errors={errors}
                            name={`${name}[0].telecommunicationNumber`} 
                            label="Telephone: " />
                    )} />

                <FieldArray
                    name="contactDetails.eAddress"
                    render={({ name }) => (
                        <InputWrapper 
                            touched={touched}
                            errors={errors}
                            name={`${name}[0].address`} 
                            label="Email Address: " />
                    )} />
            </Fieldset>

            <Fieldset className="create-party__inline-fields">
                <SelectWrapper
                    touched={touched}
                    errors={errors}
                    required
                    isMulti
                    label="Currency Code"
                    name="contactDetails.postalAddress.state"
                    onChange={setFormValue('currencyCode')}
                    options={currencies} />

                {values.networkId === DCI &&
                    <InputWrapper
                        touched={touched}
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

const CreateParty = ({
    countries, 
    currencies, 
    currentCountryIndex, 
    states, 
    submitPartyForm,
    tenant:networkId, 
    networks,
    user,
}) => {
    let initialValues = createPartyInitialValues;
    if (networkId === DCI) {
        initialValues = { DXSCode: '', ...initialValues};
    }

    return (
        <AppPanel title="Create Party" help={createHelp}>
            <section>
                <p className="create-party__message">All fields are mandatory unless indicated.</p>
                <Formik
                    validationSchema={createPartyValidationSchema}
                    initialValues={initialValues}
                    render={renderPartyForm(countries, currencies, states, currentCountryIndex, networks, user)}
                    onSubmit={values => submitPartyForm(values)} />
            </section>
        </AppPanel>
    );
}

export default CreateParty;
