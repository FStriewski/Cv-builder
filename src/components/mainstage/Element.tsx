import * as React from 'react';
import { Element } from '../../styles/Element';
import { DraggableHOC, DragState } from './DraggableHOC';

import Draggable from 'react-draggable';

const DraggableWrapper = (props) => (
         <DragState>
           {({ dragHandlers, handleDrag }) => (
          
               <Draggable
                 bounds="parent"
                 grid={[20, 20]}
                 onDrag={handleDrag}
                 {...dragHandlers}
               >
                 {/* <Element className="box">
                   <div>{content}</div>
                 </Element> */}
                 {props.children}
               </Draggable>
           )}
         </DragState>
       );

export const Node = ({ content }) => (
         <DraggableWrapper>
           <Element className="box">
             <div>{content.map(x => x.id)}</div>
           </Element>
         </DraggableWrapper>
       ); 