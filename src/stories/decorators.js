import React from 'react';
import { Formik } from 'formik';

export const StyleguideWrapper = storyFn => <div className="styleguide__wrapper">{storyFn()}</div>

/**
 * Decorates a story with Formik
 * @param initialValues
 * @param validationSchema - yup schema (formik validationSchema)
 */

export const FormikWrapper = (initialValues, validationSchema) => story => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
    render={helpers => story(helpers)}>
  </Formik>
);