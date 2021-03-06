/**
 *
 * SellRamForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import RemoveCircle from '@material-ui/icons/RemoveCircle';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'sellram',
      data: {
        account: values.owner,
        bytes: Number(values.ram),
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Buyer name is required'),
  ram: Yup.number()
    .required('RAM quantity is required')
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional'),
});

const SellRamForm = props => {
  return (
    <ToolBody color="warning" icon={RemoveCircle} header="Sell RAM">
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      ram: '8192',
    }),
    validationSchema,
  })
);

export default enhance(SellRamForm);
