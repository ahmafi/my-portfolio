import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  font-size: 0.75rem;
  position: relative;
  margin-left: 1em;
`;

const DotWidth = 9;
const DotTop = 10;

const DateItem = styled.div`
  position: relative;
  padding-right: 0.75em;
  text-align: right;

  ${({ endDate }) =>
    !endDate &&
    css`
      padding-bottom: 0.5em;
    `};

  ::before {
    content: '';

    ${({ endDate }) =>
      endDate
        ? css`
            border: ${`${DotWidth / 2}px`} solid gray;
            background-color: gray;
          `
        : css`
            border: 2px solid gray;
          `};
    position: absolute;
    right: -3px;
    top: ${`${DotTop}px`};
    transform: translateY(-50%);
    width: ${`${DotWidth}px`};
    height: ${`${DotWidth}px`};
    border-radius: 50%;
  }

  /* Some shenanigans before I found a better way, I'm gonna keep it here
  though, because with this we can have 2 lines with different attributes,
  one coming from starting date and the other coming from end date, needs some
  changes in ::before to work.
  This method works with different font sizes, but can't draw dotted lines.
  */
  /* :after {
    content: '';
    position: absolute;
    ${({ end }) =>
    end
      ? css`
          bottom: calc(50% + ${`${DotWidth / 2}px`});
        `
      : css`
          top: calc(50% + ${`${DotWidth / 2}px`});
        `}
    right: -2.5px;
    height: calc(50% - ${`${DotWidth / 2}px`});
    width: 4px;
    border-left: 3px solid gray;
  } */

  /* ${({ single }) =>
    single &&
    css`
      :after {
        display: none;
      }
    `} */
`;

const Line = styled.div`
  position: absolute;
  top: calc(${`${DotTop}px`} + ${`${DotWidth / 2}px`});
  right: 1px;
  height: calc(100% - ${`${DotWidth}px`});
  border-right: 2px dotted gray;
`;

function Date({ startDate, endDate }) {
  return (
    <Container>
      {startDate && (
        <>
          <DateItem>
            {startDate}
            <Line />
          </DateItem>
        </>
      )}
      <DateItem endDate>{endDate}</DateItem>
    </Container>
  );
}

export default Date;
