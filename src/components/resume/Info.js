import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from './Icon';
import { smallerThan500, smallerThanA4 } from './media';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${smallerThanA4} {
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${smallerThan500} {
    flex-direction: column;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${smallerThan500} {
    align-items: center;
  }
`;

const InfoLine = styled.div`
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

  const infoColumn = (info) => (
    <InfoLine
      key={info.content}
      href={info.link}
      as={info.hasOwnProperty('link') ? 'a' : null}
    >
      <Icon name={info.icon} color={theme.accentColor} width={1.1} />
      <Text dir="ltr">{info.content}</Text>
    </InfoLine>
  );

  return (
    <Container>
      <InfoColumn>
        {data
          .slice(0, Math.ceil(data.length / 2))
          .map((info) => infoColumn(info))}
      </InfoColumn>
      <InfoColumn>
        {data
          .slice(Math.ceil(data.length / 2), data.length)
          .map((info) => infoColumn(info))}
      </InfoColumn>
    </Container>
  );
}

export default Info;
