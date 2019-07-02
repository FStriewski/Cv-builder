import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { Button } from '../../styles/Button';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';
import {ColorPicker} from './ColorPicker';
import SelectionState from '../../lib/Selection';

  /* tslint:disable: jsx-no-lambda */
const SideBar = (props) => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      // <SelectionState>
      //   {({selectedId})=>(
      <StyledSideBar>
        <SideBarHeader />
        <Button onClick={() => updateMode(Mode.EDIT)}>Edit</Button>
        <Button onClick={() => updateMode(Mode.DRAG)}>Drag</Button>
        <ColorPicker selectedElement={props.selected}/>
      </StyledSideBar>
//  )}
//       </SelectionState>
    )}
  </ModeSetting>
);

export default SideBar;
