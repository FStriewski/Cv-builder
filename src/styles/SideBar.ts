import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const SideBar = styled.div`
  // height: calc(100vh - 60px);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  width: 200px;
  float: left;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid ${SCHEMA_1.COLOR_3};
  background-color: ${SCHEMA_1.COLOR_1};
  color: white;
  border-top: none;
  text-align: center;
`;

export const SideBarHeader = styled.div`
  border-bottom: 1px solid ${SCHEMA_1.COLOR_3};
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${SCHEMA_1.COLOR_3};
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  padding: 6px 0px;

  form {
    display: flex;
  }

  span{
    color: ${SCHEMA_1.COLOR_3};
  }
`;

