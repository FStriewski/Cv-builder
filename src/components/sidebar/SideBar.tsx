import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';
import { HeaderButton } from '../../styles/Button';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';
import { ColorPicker } from './ColorPicker';

import { FontSize } from './FontSize';
import { FontFamily } from './FontFamily';
import { FontWeight } from './FontWeight';

/* tslint:disable: jsx-no-lambda */
const SideBar = props => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      <StyledSideBar>
        <SideBarHeader>
          <HeaderButton
            onClick={() => updateMode(Mode.EDIT)}
            active={mode === Mode.EDIT}
          >
            Edit
          </HeaderButton>
          <HeaderButton
            onClick={() => updateMode(Mode.DRAG)}
            active={mode === Mode.DRAG}
          >
            Drag
          </HeaderButton>
        </SideBarHeader>
        {mode === Mode.EDIT && (
          <div>
            <Box>
              <span>Font Color</span>
              <ColorPicker selectedElement={props.selected} />
            </Box>
            <Box>
              <span>Font Style</span>
              <FontSize selectedElement={props.selected} />
  
              <span>Font Family</span>
              <FontFamily selectedElement={props.selected} />
              <span>Font Weight</span>
              <FontWeight selectedElement={props.selected} />
            </Box>
          </div>
        )}
      </StyledSideBar>
    )}
  </ModeSetting>
);

export default SideBar;
