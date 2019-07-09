import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { HeaderButton } from '../../styles/Button';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';
import { ColorPicker } from './ColorPicker';

import { FontSize } from './FontSize';

/* tslint:disable: jsx-no-lambda */
const SideBar = props => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      <StyledSideBar>
        <SideBarHeader>
          <HeaderButton onClick={() => updateMode(Mode.EDIT)}>Edit</HeaderButton>
          <HeaderButton onClick={() => updateMode(Mode.DRAG)}>Drag</HeaderButton>
        </SideBarHeader>
        <ColorPicker selectedElement={props.selected} />
        <FontSize selectedElement={props.selected} />
      </StyledSideBar>
    )}
  </ModeSetting>
);

export default SideBar;
