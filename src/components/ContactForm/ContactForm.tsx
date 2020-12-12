import React from 'react';
import Button from '../Button/Button';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

import './ContactForm.scss';

// Shape of form values
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { submitCount, errors } = props;
  return (
    <Form className="form">
      <div className="form--control">
        <label className="form--label" htmlFor="name">
          name
        </label>
        <Field name="name" id="name" />
        {!!submitCount && errors.name && (
          <div className="form--error">{errors.name}</div>
        )}
      </div>

      <div className="form--control">
        <label className="form--label" htmlFor="name">
          email
        </label>
        <Field name="email" id="email" />
        {!!submitCount && errors.email && (
          <div className="form--error">{errors.email}</div>
        )}
      </div>

      <div className="form--control">
        <label className="form--label" htmlFor="name">
          message
        </label>
        <Field as="textarea" name="message" id="message" />
        {!!submitCount && errors.message && (
          <div className="form--error form--error__textarea">
            {errors.message}
          </div>
        )}
      </div>

      <div className="form--btn">
        <Button type="submit" styleType="blue" label="send" />
      </div>
    </Form>
  );
};

const ContactForm = withFormik<{}, FormValues>({
  mapPropsToValues: () => {
    return {
      name: '',
      email: '',
      message: '',
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.name) {
      errors.name = 'This field is required';
    }

    if (!values.email) {
      errors.email = 'This field is required';
    }
    if (!values.message) {
      errors.message = 'This field is required';
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log('Contact form: ', values);
  },
})(InnerForm);

export default ContactForm;
