import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ArrowRight } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-Items: center;
  padding: 14px 9px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  text-decoration: none;
  border-bottom: 1px solid rgb(230, 236, 240);
  cursor: pointer;
  &:hover {
    background-color: rgb(245, 248, 250);;
  }
  transition-property: background-color;
  transition-duration: 0.2s;
`;
const StyledNavLink = styled(NavLink)`
  &.active {
    border-right: 2px solid rgb(29, 161, 242);
    background-color: rgb(245, 248, 250);;
  }
`;
function LinkItem({
  to, title, subTitle, isNav,
}) {
  return (
    <Item as={isNav ? StyledNavLink : null} to={to}>
      <div>
        <Text>{title}</Text>
        <br />
        {subTitle && <Text small secondary>{subTitle}</Text>}
      </div>
      <ArrowRight xsmall secondary />
    </Item>
  );
}
LinkItem.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, ReactRouterPropTypes.route]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  isNav: PropTypes.bool,
};
LinkItem.defaultProps = {
  subTitle: '',
  isNav: false,
};
export default LinkItem;
