import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Node = styled<
  {
    x: number;
    y: number;
  },
  'div'
>('div')`
  x:${props => props.x};
  y:${props => props.y};
  width: 100%;
  min-height: 150px;
  background-color: white;
  border: 1px solid ${SCHEMA_1.COLOR_3};
  z-index: 10;
`;

const setBorder = (selected: boolean) => {
  if (selected) {
    return '1px dashed grey';
  }
};

export const TextElement = styled<
  {
    selected: boolean;
    color: string;
    fontSize: number;
    fontWeight: number;
    fontFamily: string;
  },
  'div'
>('div')`
  padding-left: 20px;
  padding-top: 5px;
  border: ${props => setBorder(props.selected)};
  color: ${props => props.color || '#000000'};
  font-size: ${props => props.fontSize || 12}px;
  font-weight: ${props => props.fontWeight || 200};
  font-family: ${props => props.fontFamily || 'inherit'};
  padding: 5px;
`;

export const InactiveText = styled.div`
  position: relative;
  white-space: pre-wrap;
  margin: 2px 25px;
`;
export const ActiveText = styled.div`
  position: relative;
  white-space: pre-wrap;
  margin: 2px 25px;
`;
