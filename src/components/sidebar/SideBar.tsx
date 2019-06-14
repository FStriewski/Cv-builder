import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { SideBarHeader } from './Header';

const SideBar = ({}) => (
  <StyledSideBar>
    <SideBarHeader />
    Controls
  </StyledSideBar>
);

export default SideBar;
