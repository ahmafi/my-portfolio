import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const SectionContainer = styled.div`
  margin-left: 2px;
  margin-right: 4px;
`;

function Section({ sectionData, Component }) {
  const { title, icon } = sectionData.header;
  const content = sectionData.content;

  return (
    <div>
      <SectionHeader title={title} icon={icon} />
      <SectionContainer>
        <Component content={content} />
      </SectionContainer>
    </div>
  );
}

export default Section;
