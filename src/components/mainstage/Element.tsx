import * as React from 'react';
import Draggable from 'react-draggable';
import { Element, Paragraph } from '../../styles/Element';
import { DragState } from './DraggableHOC';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';
import {TextElement} from './TextElement';

const ParagraphBox = props =>
{
return (
    <SelectionState>
      {({ select, selectedId }) => (
        // tslint:disable:jsx-no-lambda
        <Paragraph
          onMouseDown={e => select(e, props.id)}
          selected={selectedId === props.id}
        >
          <TextElement selected={selectedId === props.id} {...props} />
        </Paragraph>
      )}
    </SelectionState>
);
}
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
