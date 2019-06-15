import * as React from 'react';
import { Element } from '../../styles/Element';
import { DragState } from './DraggableHOC';

import Draggable from 'react-draggable';

const Paragraph = (props) => (
  <div>
    {props.content}
  </div>
);

const DraggableWrapper = (props) => (
         <DragState>
           {({ dragHandlers, handleDrag }) => (
          
               <Draggable
                 bounds="parent"
                 grid={[20, 20]}
                 onDrag={handleDrag}
                 {...dragHandlers}
               >
                 {props.children}
               </Draggable>
           )}
         </DragState>
       );

export const Node = ({ paragraphs }) => (
         <DraggableWrapper>
           <Element className="box">
             {paragraphs.map(p => <Paragraph key={p.id} {...p}/>)}
           </Element>
         </DraggableWrapper>
       ); 