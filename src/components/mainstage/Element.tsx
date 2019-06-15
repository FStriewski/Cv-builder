import * as React from 'react';
import { Element } from '../../styles/Element';
import { DraggableHOC, DragState } from './DraggableHOC';

import Draggable from 'react-draggable';

export const DraggableWrapper = () => (
         <DragState>
           {({ dragHandlers, handleDrag }) => (
          
               <Draggable
                 bounds="parent"
                 grid={[20, 20]}
                 onDrag={handleDrag}
                 {...dragHandlers}
               >
                 <Element className="box">
                   <div>Move me</div>
                 </Element>
               </Draggable>
           )}
         </DragState>
       );
