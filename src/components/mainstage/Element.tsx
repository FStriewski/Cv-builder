import * as React from 'react';
import Draggable from 'react-draggable';
import CVConsumer from 'src/data/Cvdata';
import ModeSetting from '../../data/Mode';
import { DragState } from '../../lib/DraggableHOC';
import SelectionState from '../../lib/Selection';
import { Node as StyledNode, TextElement as StyledTextElement } from '../../styles/Element';
import { IParagraph, IPartialNode, Mode } from '../../types';
import { DraftTextElement } from './TextElement';

const ParagraphWrapper = props => (
  <SelectionState>
    {({ select, selectedId }) => (
      // tslint:disable:jsx-no-lambda
      <StyledTextElement
        onMouseDown={e => select(e, props.id)}
        selected={selectedId === props.id}
        color={props.style.color}
      >
        <DraftTextElement
          selected={selectedId === props.id}
          {...props}
        />
      </StyledTextElement>
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
            <StyledNode className="box" {...node}>
              {paragraphs.map(paragraph => (
                <ParagraphWrapper key={paragraph.id} {...paragraph} />
              ))}
            </StyledNode>
          </DraggableWrapper>
        ) : (
          <StyledNode className="box" {...node}>
            {paragraphs.map(paragraph => (
              <ParagraphWrapper key={paragraph.id} {...paragraph} />
            ))}
          </StyledNode>
        )
      }
    </ModeSetting>
  );};
