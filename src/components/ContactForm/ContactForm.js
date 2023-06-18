import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';

import {
  Form,
  FormField,
  LabelWrapper,
  FormikField,
  ErrorMessage,
  SubmitButton,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .trim()
    .required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form>
        <FormField htmlFor="name">
          <LabelWrapper>Name</LabelWrapper>
          <FormikField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormField>
        <ErrorMessage name="name" component="span" />

        <FormField htmlFor="number">
          <LabelWrapper>Number</LabelWrapper>
          <FormikField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormField>
        <ErrorMessage name="number" component="span" />

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
