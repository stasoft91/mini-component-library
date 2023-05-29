import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
   //large == 22

  return (
      <Wrapper style={{'--width': width + 'px'}}>
          <Input placeholder={placeholder} size={size}></Input>
          <IconStyled id={icon} size={size === 'large' ? 24 : 16}></IconStyled>
          <VisuallyHidden>{label}</VisuallyHidden>
      </Wrapper>
  );
};

const IconStyled = styled(Icon)`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.75rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: ${props => props.size === 'large' ? '2px' : '1px'} solid ${COLORS.black};
  position: relative;
  padding-left: 1.75em;
  font-size: ${props => props.size === 'large' ? '1.25rem' : '0.75rem'};
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  width: var(--width);
  outline-offset: 2px;
  
  &:not(:placeholder-shown) {
    font-weight: 700;
  }
  
  &::placeholder {
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.label`
  isolation: isolate;
  position: relative;
  display: block;

  &:hover {
    ${IconStyled} {
      opacity: 1;
    }
    ${Input} {
      color: ${COLORS.black};
    }
  }
`;




export default IconInput;
