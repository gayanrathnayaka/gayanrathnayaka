import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from 'react-icons/di';
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiTypescript,
  SiAngular,
  SiDotnet,
  SiAzurepipelines,
  SiAzurefunctions,
  SiPostgresql,
  SiMysql,
  SiRabbitmq
} from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col data-tip='C#' xs={4} md={2} className='tech-icons'>
        <ReactTooltip backgroundColor='#381353' />
        <SiCsharp />
      </Col>
      <Col data-tip='Javascript' xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col data-tip='TypeScript' xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col data-tip='React' xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col data-tip='Angular' xs={4} md={2} className='tech-icons'>
        <SiAngular />
      </Col>
      <Col data-tip='.NET' xs={4} md={2} className='tech-icons'>
        <SiDotnet />
      </Col>
      <Col data-tip='Rabbit MQ' xs={4} md={2} className='tech-icons'>
        <SiRabbitmq />
      </Col>
      <Col data-tip='Azure Functions' xs={4} md={2} className='tech-icons'>
        <SiAzurefunctions />
      </Col>
      <Col data-tip='PostgreSql' xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
      </Col>
      <Col data-tip='MySql' xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
