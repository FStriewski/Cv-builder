import styled from './styled-components';

import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const MainStage = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-wrap: nowrap;
  background-color: ${COMMON.COLOR_1};

  div {
    padding: 10px;
    border: 1px solid ${SCHEMA_1.COLOR_1};
  }
`;
