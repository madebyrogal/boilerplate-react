import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MyButton } from '../buttons/styles';
import { Title } from './styles';

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>To jest styled component title</Title>
        </Col>
        <Col>
          <MyButton>Nadpisany button z bootstrap</MyButton>
        </Col>
      </Row>
    </Container>
  );
};
