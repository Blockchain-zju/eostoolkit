/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import NoteAdd from '@material-ui/icons/NoteAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { stageTransaction } from 'containers/OfflineClient/actions';

const FormData = [
  {
    id: 'transaction',
    label: 'Transaction Details',
    placeholder: 'Write your transaction details here',
    multiline: true,
    rows: 30,
    md: 12,
  },
  {
    id: 'actor',
    label: 'Authorization Account',
    placeholder: 'Account authorizing this transaction',
  },
  {
    id: 'permission',
    label: 'Account Permission',
    placeholder: 'Permission for this authorization',
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Create JSON',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const validationSchema = Yup.object().shape({
  actor: Yup.string().required('Account name is required'),
  permission: Yup.string().required('Permission is required'),
});

const MultisigCreate = props => {
  const { transaction } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={NoteAdd}
          header="Create Transaction"
          subheader=" - Share the resulting JSON for signing">
          <h5>Transaction details:</h5>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <p>Review the transaction details.</p>
          <p>
            Supply the single account name and permission (i.e. owner or active) that will ultimately authorize this
            transaction.
          </p>
          <p>Click Create JSON</p>
          <p>
            A dialogue prompt will appear with the Transaction JSON. The JSON will also automatically download as a
            file.
          </p>
          <p>Share this JSON file with each person who has to sign.</p>
          <p>Each person will sign using the Sign Transaction feature.</p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  transaction: makeSelectTransaction(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleTransaction: data => dispatch(stageTransaction(data)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { handleTransaction } = props;
      setSubmitting(false);
      handleTransaction(values);
    },
    mapPropsToValues: props => ({
      actor: '',
      permission: '',
      transaction: props.transaction
        ? JSON.stringify(props.transaction, null, 2)
        : 'No transaction available - Switch to multisig mode and use one of the toolkit features.',
    }),
    validationSchema,
  })
);

export default enhance(MultisigCreate);
