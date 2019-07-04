import * as React from 'react';
import Draggable from 'react-draggable';
import CVConsumer from 'src/data/Cvdata';
import ModeSetting from '../../data/Mode';
import { DragState } from '../../lib/DraggableHOC';
import {
  Node as StyledNode,
  TextElement as StyledTextElement
} from '../../styles/Element';
import { IParagraph, IPartialNode, Mode, ID } from '../../types';
import { ParagraphWrapper } from './Element';
import { FloatingButton } from '../../styles/Button';
import { MdDelete } from 'react-icons/md';

const DraggableWrapper = props => (
  <CVConsumer>
    {({ updatePosition }) => (
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
  deleteNode: (id: ID) => void;
  isActive: boolean;
  setActiveNode: (Id: string) => void;
}

export const Node = ({
  node,
  paragraphs,
  isActive,
  setActiveNode,
  deleteNode
}: IRNode) => {
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
          <StyledNode
            className="box"
            {...node}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode('')}
          >
            {isActive && (
              <FloatingButton onClick={() => deleteNode(node.id)}>
                <MdDelete size={24} />
              </FloatingButton>
            )}

            {paragraphs.map(paragraph => (
              <ParagraphWrapper key={paragraph.id} {...paragraph} />
            ))}
          </StyledNode>
        )
      }
    </ModeSetting>
  );
};
