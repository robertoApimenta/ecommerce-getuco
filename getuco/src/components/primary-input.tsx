import { InputHTMLAttributes } from "react";
import styled from "styled-components";

import { SearchIcon } from "./images/search-icon";

export const PrimaryInput = styled.input`
  width: 352px;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 10px 16px;
  border: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  font-family: inherit;
  color: var(--text-dark);
`;

export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
