import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';


export const ColorTile = styled.div`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  display: flex;
  margin: 4px 6px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color || COMMON.COLOR_1};
  color: ${COMMON.COLOR_1};
  border: 1px solid ${SCHEMA_1.COLOR_3};
  border-radius: 15px;
  transition: 0.1s ease-in;
  // box-shadow: inset 0 0 0 1px ${SCHEMA_1.COLOR_1};
  cursor: pointer;
`;

export const ColorCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;