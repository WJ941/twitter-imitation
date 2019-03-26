import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Text from '../BaseComponents/Text';
import TextInput from './TextInput';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import LayOut from './LayOut';

function isEmail(value) {
  const reg = /^[a-zA-Z.]+@[a-zA-Z]+.[a-zA-Z]+$/;
  return reg.test(value);
}

export default function Email({ email, setEmail, history }) {
  const [newEmail, setNewEmail] = useState('');
  function handleChange(e) {
    setNewEmail(e.target.value);
  }
  function handleSave() {
    setEmail(newEmail);
    history.goBack();
  }
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改电子邮件" />}
      rightAside={(
        <>
          <PrimaryGap />
          <TextInput
            labelText="现用"
            readOnly
            value={email}
            onChange={null}
          />
          <TextInput
            labelText="新"
            value={newEmail}
            onChange={handleChange}
            autoFocus
          />
          <PrimaryGap />
          <div style={{ padding: '9px', backgroundColor: 'white' }}>
            <Text secondary>
            你的邮件地址不在你在 Twitter 上的公开个人资料中显示。其他人将能够以邮件地址或手机号码找到你。你可以随时更改这些设置。
            </Text>
          </div>
          <PrimaryGap />
          <div style={{
            display: 'flex', justifyContent: 'flex-end', padding: '9px', backgroundColor: 'white',
          }}
          >
            <CustomizedButton
              filled
              onClick={handleSave}
              disabled={
                newEmail === email
                || !isEmail(email)
              }
            >
              保存
            </CustomizedButton>
          </div>
        </>
      )}
    />
  );
}
Email.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
