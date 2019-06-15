import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from './DraggableHOC';
import { DraggableWrapper } from './Element';
import { Col1, Col2 } from './Columns';

const MainStage = () => (
  <DraggableHOC>
    <StyledMainStage>
      <Col1>
        <DraggableWrapper />
      </Col1>
      <Col2>
        <DraggableWrapper />
        <DraggableWrapper />
      </Col2>
    </StyledMainStage>
  </DraggableHOC>
);

export default MainStage;
