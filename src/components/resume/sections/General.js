import React from 'react';
import styled from 'styled-components';
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
  align-items: flex-start;
  font-size: 1.1rem;
  font-weight: 560;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

const Links = styled.div`
  display: flex;

  > * {
    margin-right: 0.4em;
  }
`;

const Subtitle = styled.div`
  font-size: 0.8rem;
  font-weight: 560;
  color: ${({ theme }) => theme.color2};
`;

const Desc = styled.div`
  font-size: 0.8rem;
  font-weight: 470;
  text-align: justify;
`;

function General({ content }) {
  return (
    <Container>
      {content.map(
        ({ title, subtitle, links, desc, techs, startDate, endDate }) => (
          <Item key={`${title}${subtitle}`}>
            <Date startDate={startDate} endDate={endDate} />
            <Content>
              <Title>
                {title}
                {links && (
                  <Links>
                    {links.map((link) => (
                      <Icon
                        key={link.name}
                        href={link.name}
                        name={link.icon}
                        width={1.1}
                      />
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
