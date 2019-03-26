import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../BaseComponents/Text';

const Container = styled.div`
  padding: 9px;
  background-color: rgb(255, 255, 255);
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid rgb(170, 184, 194);;
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.3125;
  color: rgb(20, 23, 26);
  display: block;
  width: 100%;
  padding: 9px 0;
  :read-only{
    color: rgb(101, 119, 134);
  }
  :not(:read-only):focus {
    border-bottom: 2px solid rgb(29, 161, 242);
    margin-bottom: 0;
    outline: none;
  }
`;
function TextInput({ labelText, WarningLabel, ...otherProps }) {
  return (
    <Container>
      <label htmlFor="customized-input">
        <Text secondary>{labelText}</Text>
        <StyledInput type="text" name="customized-input" id="customized-input" {...otherProps} />
      </label>
      {WarningLabel && <WarningLabel />}
    </Container>
  );
}
const TextInputType = {
  labelText: PropTypes.string.isRequired,
  WarningLabel: PropTypes.func,
};
TextInput.propTypes = TextInputType;
TextInput.defaultProps = {
  WarningLabel: () => <></>,
};
export { TextInputType };
export default TextInput;
