import * as React from 'react';
import Draggable from 'react-draggable';
import { Element, Paragraph } from '../../styles/Element';
import { DragState } from './DraggableHOC';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';

const ParagraphBox = props => (
  <SelectionStateProvider>
    <SelectionState>
      {({ select, selectedId }) => (
        // tslint:disable-next-line:jsx-no-lambda
        <Paragraph onMouseDown={e => select(e, props.id)} selected={selectedId === props.id}>
          {console.log(selectedId, props.id)}
          {props.content}
        </Paragraph>
      )}
    </SelectionState>
  </SelectionStateProvider>
);

const DraggableWrapper = props => (
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
      {paragraphs.map(p => (
        <ParagraphBox key={p.id} {...p} />
      ))}
    </Element>
  </DraggableWrapper>
);
