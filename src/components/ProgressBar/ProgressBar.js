/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} size={size}>
      <Line value={value} size={size} />
      <VisuallyHidden>
        <Progress max="100" value={value}>{value}%</Progress>
      </VisuallyHidden>
    </Wrapper>
  );
};

const SIZES = {
  'small': 'height: 8px;',
  'medium': 'height: 12px;',
  'large': `
    height: 24px;
    padding: 4px;
  `,
};

const Line = styled.div`
  height: 100%;
  width: ${props => props.value}%;
  background: ${COLORS.primary};


  ${props => props.size === 'large' && `
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `}

  ${props => props.value === 100 && `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
  
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  background: #eee;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  width: 370px;

  ${props => SIZES[props.size]}
`;

const Progress = styled.progress``;

export default ProgressBar;
  