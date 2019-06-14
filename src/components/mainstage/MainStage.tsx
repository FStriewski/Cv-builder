import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from './DraggableHOC';
import { ElementItem } from './Element';

const MainStage = () => (
  <DraggableHOC>
    <StyledMainStage>
          <ElementItem />
    </StyledMainStage>
  </DraggableHOC>
);

export default MainStage;
