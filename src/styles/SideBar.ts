import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const SideBar = styled.div`
  width: 200px;
  height: 100%;
  background: #fff;
  flex-shrink: 0;
  box-shadow: 3px 1px 5px 0px rgba(0, 0, 0, 0.35);
  margin-left: 0;
  overflow: auto;
  z-index: 30;
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
  padding: 15px 0px;

  form {
    display: flex;
  }

  span {
    color: ${SCHEMA_1.COLOR_3};
  }
`;
