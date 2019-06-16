import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';

  /* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      <StyledSideBar>
        <SideBarHeader />
        Controls
        <button onClick={() => updateMode(Mode.EDIT)}>Edit</button>
        <button onClick={() => updateMode(Mode.DRAG)}>Drag</button>
      </StyledSideBar>
    )}
  </ModeSetting>
);

export default SideBar;
