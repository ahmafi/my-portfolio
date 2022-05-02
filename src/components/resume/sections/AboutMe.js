import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 470;
`;

function AboutMe({ content }) {
  return <Text>{content}</Text>;
}

export default AboutMe;
