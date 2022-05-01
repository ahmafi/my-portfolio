import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from './Icon';

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`;

const Text = styled.p`
  margin-right: 0.25em;
  font-weight: 600;
`;

function Info({ data }) {
  const theme = useTheme();

  return (
    <InfoBlock>
      {data.map((info) => (
        <Container
          key={info.content}
          href={info.link}
          as={info.hasOwnProperty('link') ? 'a' : null}
        >
          <Icon name={info.icon} color={theme.accentColor} width={'1.1em'} />
          <Text dir="ltr">{info.content}</Text>
        </Container>
      ))}
    </InfoBlock>
  );
}

export default Info;
