import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    const IconStyled = styled(Icon)`
      opacity: 0.5;
    `;

    const IconWrapper = styled.div`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: auto;
      height: 24px;
      width: 24px;

    `;
    const VisualComponent = styled.div`
      display: block;
      position: relative;
      padding: 12px 52px 12px 16px;
      border: none;
      background: ${COLORS.transparentGray15};
      color: ${COLORS.gray700};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      border-radius: 8px;
    `;

    const Wrapper = styled.div`
      position: relative;
      width: max-content;
      isolation: isolate;

      &:hover {
        ${IconStyled} {
          opacity: 1;
        }
        ${VisualComponent} {
          color: ${COLORS.black};
        }
      }
    `;

    const NativeSelect = styled.select`
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `;

    return (
        <Wrapper>
            <IconWrapper>
                <IconStyled id="chevron-down" strokeWidth={1} size={24} />
            </IconWrapper>
            <VisualComponent>
                {displayedValue}
            </VisualComponent>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
        </Wrapper>
    );
};

export default Select;
