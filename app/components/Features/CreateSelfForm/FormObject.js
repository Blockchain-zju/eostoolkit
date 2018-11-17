import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'name',
    label: 'New Account Name',
    placeholder: '12 characters, a-z, 1-5',
  },
  {
    id: 'pubKey',
    label: 'Public Key',
    placeholder: 'Enter public key',
  },
  {
    id: 'inviteCode',
    label: 'Invite Code',
    placeholder: 'Enter invite code'
  }
];
//
// const switchData = {
//   id: 'transfer',
//   label: 'Transfer',
//   placeholder:
//     'Tranfer Off: owner retains staking control and voting rights. Transfer On: New account gains staking control and voting rights.',
// };

const FormObject = props => {
  const {handleSubmit} = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Create',
    noDisclaimer: true
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
