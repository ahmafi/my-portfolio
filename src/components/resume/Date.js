import React from 'react';
import styled, { css } from 'styled-components';

const dot = css`
  content: '';
  display: inline-block;
  width: 9px;
  height: 9px;
  border: 2px solid gray;
  border-radius: 50%;
  margin-left: 0.25em;
`;

const Container = styled.div`
  font-size: 0.75rem;
  position: relative;
`;

const StartDate = styled.div`
  margin-bottom: 0.5em;
  ::before {
    ${dot}
  }
`;

const EndDate = styled.div`
  ::before {
    ${dot}
    background-color: gray;
  }
`;

const Line = styled.div`
  position: absolute;
  top: 12px;
  right: 3px;
  height: 2em;
  border-left: 2px dotted gray;
`;

function Date({ startDate, endDate }) {
  return (
    <Container>
      {startDate && (
        <>
          <Line />
          <StartDate>{startDate}</StartDate>
        </>
      )}
      <EndDate>{endDate}</EndDate>
    </Container>
  );
}

export default Date;
