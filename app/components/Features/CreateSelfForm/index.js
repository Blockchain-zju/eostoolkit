/**
 *
 * CreateAccountForm
 *
 */

import React from 'react';
import {compose} from 'recompose';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'utils/axios';

import PersonAdd from '@material-ui/icons/PersonAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';
import GetKeyObject from './GenKeys';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Account name is required')
    .matches(/([a-z1-5]){12,}/, {
      excludeEmptyString: true,
      message: 'Invalid account name',
    }),
  pubKey: Yup.string().required('Public key is required'),
  inviteCode: Yup.string()
    .required('Invite code is required')
    .matches(/[a-zA-Z0-9]{8,}/, {
      excludeEmptyString: true,
      message: 'Invalid invite code',
    })
});

const CreateSelfForm = props => {

  return (
    <Tool>
      <ToolSection lg={5}>
        <ToolBody color="info" header="生成密钥对">
          <GetKeyObject/>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={7}>
        <ToolBody color="warning" icon={PersonAdd} header="创建账户">
          <FormObject
            {...props}
          />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};


const enhance = compose(
  withFormik({
    handleSubmit: async (values, {props, setSubmitting}) => {
      // const transaction = makeTransaction(values);
      setSubmitting(false);
      const {name, pubKey, inviteCode} = values;
      try {
        let res = await axios.post('/signup', {
          account: name,
          pubKey,
          inviteCode
        });
        res = res.data;
        if (res.code === 0) {
          alert("创建账户成功")
        } else {
          alert(`创建账户失败，错误信息：${res.message}`)
        }
      } catch (e) {
        alert(`创建账户失败，错误信息：${e.message}`)
      }
    },
    mapPropsToValues: props => ({
      name: '',
      pubKey: '',
      inviteCode: '',
    }),
    validationSchema,
  })
);

export default enhance(CreateSelfForm);
