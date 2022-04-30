import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAzuredevops,
  SiVisualstudio,
  SiGit
} from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col data-tip='Visual Studio' xs={4} md={2} className='tech-icons'>
        <ReactTooltip backgroundColor='#381353' />
        <SiVisualstudio />
      </Col>
      <Col data-tip='Visual Studio Code' xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col data-tip='Postman' xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col data-tip='Git' xs={4} md={2} className='tech-icons'>
        <SiGit />
      </Col>
      <Col data-tip='Azure Devops' xs={4} md={2} className='tech-icons'>
        <SiAzuredevops />
      </Col>
    </Row>
  );
}

export default Toolstack;
