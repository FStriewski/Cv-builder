import * as React from 'react';
import Draggable from 'react-draggable';
import { Element, Paragraph } from '../../styles/Element';
import { DragState } from '../../lib/DraggableHOC';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';
import { TextElement } from './TextElement';
import { Mode, IPartialNode, IParagraph } from '../../types';
import ModeSetting from '../../data/Mode';
import  CVConsumer  from 'src/data/Cvdata';

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
        {({ dragHandlers, handleDrag, deltaPosition }) => (
          <Draggable
            bounds="parent"
            grid={[20, 20]}
            onDrag={(e, ui) => {
              handleDrag(e, ui),
                updatePosition(props.id, deltaPosition);
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

export const Node = ({node, paragraphs}: IRNode) => (
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
);
