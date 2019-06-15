import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Header = styled.div`
         border: 1px solid ${SCHEMA_1.COLOR_2};
         box-shadow: 0 1px 8px 0 #f3f3f3;

         align-items: center;
         display: flex;
         flex-shrink: 0;
         height: 40px;
         justify-content: space-between;
         position: sticky;
         width: 100%;
         top: 0;
         z-index: 10;
         user-select: none;
       `;