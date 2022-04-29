import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
`;

function AboutMe({ content }) {
  return <Text>{content}</Text>;
}

export default AboutMe;
