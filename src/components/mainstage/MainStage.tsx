import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from './DraggableHOC';
import { DraggableWrapper } from './Element';
import { Col1, Col2 } from './Columns';
import CV, {CVState} from '../../data/Cvdata';

const MainStage = () => 
(

  <CV>
    {({ data }) => (
      <DraggableHOC>
        <StyledMainStage>
          <Col1>
          {console.log(data)}
          {JSON.stringify(data)}
            <DraggableWrapper />
          </Col1>
          <Col2>
            <DraggableWrapper />
            <DraggableWrapper />
          </Col2>
        </StyledMainStage>
      </DraggableHOC>
    )}
  </CV>

);

export default MainStage;
