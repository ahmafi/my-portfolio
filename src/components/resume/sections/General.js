import React from 'react';
import styled, { useTheme } from 'styled-components';
import Date from '../Date';
import Icon from '../Icon';
import Techs from '../Techs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

  a {
    margin-right: 0.25em;
  }

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

const Links = styled.div`
  display: flex;
`;

const Subtitle = styled.div`
  font-size: 0.8rem;
`;

const Desc = styled.div`
  font-size: 0.9rem;
  text-align: justify;
`;

function General({ content }) {
  const theme = useTheme();

  return (
    <Container>
      {content.map(
        ({ title, subtitle, links, desc, techs, startDate, endDate }) => (
          <Item>
            <Date startDate={startDate} endDate={endDate} />
            <Content>
              <Title>
                {title}
                {links && (
                  <Links>
                    {links.map((link) => (
                      <a href={link.name}>
                        <Icon name={link.icon} color={theme.accentColor} />
                      </a>
                    ))}
                  </Links>
                )}
              </Title>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {desc && <Desc>{desc}</Desc>}
              {techs && <Techs techs={techs} />}
            </Content>
          </Item>
        )
      )}
    </Container>
  );
}

export default General;
