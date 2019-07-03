import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';


export const Button = styled.button`
  display: inline-block;

  transition: background 0.2s;

  height: 20px;
  line-height: 1;
  min-width: 25px;
  max-width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;

  background: transparent;
  cursor: pointer;

    padding: 0 16px;
  box-shadow: none;
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

export const FloatingButton = styled(Button)`
  height: 25px;
    width: 25px;
    text-align: center;
    justify: center;
z-index: 10;
    position: absolute; 
    right: 5px;
    top: 5px;
float: right;
  background-color: #FFFFFF;
  background-clip: padding-box;
  box-shadow: 0 4px 8px -2px  #F3F3F3;

  &:hover {
    background-color: ${COMMON.COLOR_1};
  }

  svg {
    margin: 0 -4px;
  }
`;
