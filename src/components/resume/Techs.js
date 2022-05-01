import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
`;

const Tech = styled.span`
  margin-right: 0.7em;
`;

function Techs({ techs }) {
  return (
    <Container dir="ltr">
      {techs.map((tech) => (
        <Tech key={tech}>
          {tech.replace('-', '\u2011').replace(' ', '\u00A0')}
        </Tech>
      ))}
    </Container>
  );
}

export default Techs;
