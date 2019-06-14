import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';


export const Button = styled.button`
  display: inline-block;

  transition: background 0.2s;

  height: 32px;
  border-radius: 5px;
  border: none;
  outline: none;

  background: transparent;
  cursor: pointer;

  text-align: center;
  white-space: nowrap;
  background-color: ${SCHEMA_1.COLOR_3};
  width: 70px;
  color: ${COMMON.COLOR_1};
  margin: 10px;

  &:hover {
    color: green;
  }
`;
