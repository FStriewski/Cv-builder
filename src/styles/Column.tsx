import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Column = styled<
         {
           width: number;
         },
         'div'
       >('div')`
         height: calc(100vh - 75spx);
         background-color: #fff;
         flex-shrink: 0;
         position: relative;
         z-index: 2;

         width: calc(${props => props.width}% - 0px);
         float: left;

         overflow: hidden;
         border: 1px solid ${SCHEMA_1.COLOR_2};
         border-top: none;
       `;
