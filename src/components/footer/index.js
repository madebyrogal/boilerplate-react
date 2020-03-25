import React from 'react';
import PropTypes from 'prop-types';
import { FooterSC } from './styles';

export const Footer = (props) => {
  return (
    <FooterSC theme={props.theme}>
      Footer - madebyrogal.com
    </FooterSC>
  )
};

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};
