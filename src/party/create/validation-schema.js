import * as Yup from 'yup';

const US_POSTAL_CODE_REGEX = /^\d{5}(?:[-\s]\d{4})?$/gim;
export const eAddressSchema = Yup.object().shape({
    address: Yup.string().email('Please enter a correct email address').required('Email address is required'),
    addressType: Yup.string()
});

export const teleAddressSchema = Yup.object().shape({
    telecommunicationNumber: Yup.string().required('Tele Address is required'),
    telecomType: Yup.string(),
    extension: Yup.string()
});

export const createPartyValidationSchema = Yup.object().shape({
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