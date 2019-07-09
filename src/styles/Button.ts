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
`;

export const FloatingButton = styled.button`
  text-align: center;
  justify: center;
  z-index: 10;
  position: relative;
   right: -4px;
  top: -2px;
  float: right;
  background: transparent;
  color: ${SCHEMA_1.COLOR_3};
  transition: background 0.2s;
  white-space: nowrap;
  border: none;
  margin: 5px;
  &:hover {
   color: red;
  }
`;

export const ColumnButton = styled.button`
  color: ${SCHEMA_1.COLOR_3};
  transition: background 0.2s;
  border: none;
  background: transparent;
  outline:none;
  white-space: nowrap;
  z-index: 100;
  position: fixed;
  left: -5px;
  top: 1px;
  position: absolute; 


  &:hover {
  color: black;
  }
`;

export const HeaderButton = styled<{ active?: boolean }, 'button'>('button')`
  color: white;
  transition: background 0.2s;
  border: none;
  background: transparent;
  outline:none;
  white-space: nowrap;
  z-index: 100;
  height: 100%;
  width: 100%;
    background-color: ${props => (props.active ? SCHEMA_1.COLOR_1 : SCHEMA_1.COLOR_3)};

    color: ${props => (props.active ? SCHEMA_1.COLOR_3 : SCHEMA_1.COLOR_1)};

  &:hover {
  color: grey;
  }
`;

