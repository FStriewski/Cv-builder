import * as React from 'react';
import Draggable from 'react-draggable';
import CVConsumer from 'src/data/Cvdata';
import ModeSetting from '../../data/Mode';
import { DragState } from '../../lib/DraggableHOC';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';
import { Element, Paragraph } from '../../styles/Element';
import { IParagraph, IPartialNode, Mode } from '../../types';
import { TextElement } from './TextElement';

const ParagraphBox = props => (
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

const DraggableWrapper = props => (
  <CVConsumer>
    {({updatePosition}) => (
      <DragState>
        {({ dragHandlers, handleDrag, deltaPosition, setInitialPos }) => (
          <Draggable
            bounds="parent"
            grid={[20, 20]}
            onDrag={(e, ui) => {
              handleDrag(e, ui),
                updatePosition(props.id, deltaPosition),
                setInitialPos(deltaPosition.x, deltaPosition.y);
            }}
            {...dragHandlers}
          >
            {props.children}
          </Draggable>
        )}
      </DragState>
    )}
  </CVConsumer>
);

interface IRNode {
  node: IPartialNode;
  paragraphs: IParagraph[];
}

export const Node = ({node, paragraphs}: IRNode) => {
  return (
  <ModeSetting>
    {({ mode }) =>
      mode === Mode.DRAG ? (
        <DraggableWrapper id={node.id}>
          <Element className="box" {...node}>

            {paragraphs.map(paragraph => (
              <ParagraphBox key={paragraph.id} {...paragraph} />
            ))}
          </Element>
        </DraggableWrapper>
      ) : (
        <Element className="box" {...node}>
          {paragraphs.map(paragraph => (
            <ParagraphBox key={paragraph.id} {...paragraph} />
          ))}
        </Element>
      )
    }
  </ModeSetting>
)};
