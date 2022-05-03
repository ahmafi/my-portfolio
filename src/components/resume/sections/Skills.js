import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  border: 2px solid ${({ theme }) => theme.primaryColor};
  padding: 0.05em 0.15em 0 0.15em;
  margin: 0.12em 0.12em;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`;

function Skills({ content }) {
  return (
    <Container>
      {content.map((skill) => (
        <Skill key={skill}>
          {skill.replace('-', '\u2011').replace(' ', '\u00A0')}
        </Skill>
      ))}
    </Container>
  );
}

export default Skills;
