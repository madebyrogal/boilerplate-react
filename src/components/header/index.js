import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { MyButton } from '../buttons/styles';
import { Title } from './styles';

export const Header = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>To jest styled component title</Title>
        </Col>
        <Col>
          <MyButton onClick={ () => props.appSetTheme('#555') }>Nadpisany button z bootstrap</MyButton>
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  appSetTheme: PropTypes.func.isRequired,
};
