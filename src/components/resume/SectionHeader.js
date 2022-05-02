import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const Title = styled.h3`
  margin-right: 0.25em;
  margin-bottom: 0.4em;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.accentColor};
`;

const Line = styled.span`
  flex-grow: 2;
  height: 3px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accentColor};
  margin-right: 4px;
`;

function SectionHeader({ title, icon }) {
  const theme = useTheme();

  return (
    <Container>
      <Icon name={icon} color={theme.accentColor} width={1.25} />
      <Title>{title}</Title>
      <Line />
    </Container>
  );
}

export default SectionHeader;
