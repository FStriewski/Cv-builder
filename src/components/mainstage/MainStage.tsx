import * as React from 'react';
const { useState } = React;

import { IHeader, IParagraph, IPartialNode, Position, ID } from 'src/types';
import CV from '../../data/Cvdata';
import { DraggableHOC } from '../../lib/DraggableHOC';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Col1, Col2 } from './Columns';
import { Node, DraggableWrapper } from './Node';
import { ZoomState } from '../ZoomContext';
import { ColumnButton } from 'src/styles/Button';
import { MdAddBox } from 'react-icons/md';

interface INodeActions {
  paragraphs: IParagraph[];
  deleteNode: (id: ID) => void;
  activeNode: string;
  setActiveNode: (id: string) => void;
  updateContent: (id: string, content: string) => void;
}

interface IRNodes extends INodeActions {
  nodeCollection: IPartialNode[];
}

const renderNodes = ({
  nodeCollection,
  paragraphs,
  deleteNode,
  activeNode,
  setActiveNode,
  updateContent
}: IRNodes) => {
  if (!nodeCollection) {
    return <div />;
  }
  const fullNodeCollection = nodeCollection.map(node => {
    const containedParagraphs = paragraphs.filter(p => p.parentId === node.id);

    return {
      containedParagraphs,
      node
    };
  });

  return fullNodeCollection.map(item => {
    const { node, containedParagraphs } = item;
    return (
      <DraggableWrapper key={node.id} id={node.id}>
        <Node
          key={node.id}
          paragraphs={containedParagraphs}
          node={node}
          setActiveNode={setActiveNode}
          deleteNode={deleteNode}
          isActive={node.id === activeNode}
        />
      </DraggableWrapper>
    );
  });
};

const sortNodes = (
  nodes: IPartialNode[],
  col: Position,
  paragraphs: IParagraph[],
  deleteNode: (id: ID) => void,
  activeNode: string,
  setActiveNode: (id: string) => void,
  updateContent: (id: string, content: string) => void
) => {
  if (nodes === []) {
    return;
  }
  const nodeCollection = nodes.filter(node => node.col === col);
  return renderNodes({
    activeNode,
    deleteNode,
    nodeCollection,
    paragraphs,
    setActiveNode,
    updateContent
  });
};

interface IRenderProps {
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
  deleteNode: (id: ID) => void;
  addNode: (col: Position) => void;
  updateContent: (id: string, content: string) => void;
}

const MainStage = props => {
  const [activeNode, setActiveNode] = useState('');
  return (
    <CV>
      {({
        header,
        nodes,
        paragraphs,
        deleteNode,
        addNode,
        updateContent
      }: IRenderProps) => (
        <ZoomState>
          {({ zoomValue }) => (
            <StyledMainStage zoom={zoomValue} id="print">
              <Col1>
                <ColumnButton onClick={() => addNode(Position.COL1)}>
                  <MdAddBox size={24} />
                </ColumnButton>
                {sortNodes(
                  nodes,
                  Position.COL1,
                  paragraphs,
                  deleteNode,
                  activeNode,
                  setActiveNode,
                  updateContent
                )}
              </Col1>
              <Col2>
                {sortNodes(
                  nodes,
                  Position.COL2,
                  paragraphs,
                  deleteNode,
                  activeNode,
                  setActiveNode,
                  updateContent
                )}
                <ColumnButton onClick={() => addNode(Position.COL2)}>
                  <MdAddBox size={24} />
                </ColumnButton>
              </Col2>
            </StyledMainStage>
          )}
        </ZoomState>
      )}
    </CV>
  );
};

export default MainStage;
