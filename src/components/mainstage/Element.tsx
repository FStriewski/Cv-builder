import * as React from 'react';
import { Element } from '../../styles/Element';
import { DraggableHOC, DragState } from './DraggableHOC';

import Draggable from 'react-draggable';

export const ElementItem = () => (
  <DragState>
    {({ dragHandlers, handleDrag }) => (
      <Element>
        <Draggable onDrag={handleDrag} {...dragHandlers}>
          <div className="box">
            <div>Move me</div>
          </div>
        </Draggable>
      </Element>
    )}
  </DragState>
);
