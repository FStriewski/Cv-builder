import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Element = styled.div`
  border: 1px dashed blue;
  width: 100%;
  height: 150px;
  background-color: white;

  div{
    text-align: center;
    padding: 5px;
  }
`;

const setBorder = (selected: boolean) => {
  if (selected) {
    return '2px solid red';
  }
  return '1px solid grey';
};

export const Paragraph = styled<
         {
           selected: boolean;
         },
         'div'
       >('div')`
         border: ${props =>
           setBorder(props.selected)};
         padding: 5px;
           if (isSelected) {
    return COLOR.WHITE;
  }
       `;