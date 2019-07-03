import * as React from 'react';
const { useState } = React;

import { IHeader, IParagraph, IPartialNode, Position, ID } from 'src/types';
import CV from '../../data/Cvdata';
import { DraggableHOC } from '../../lib/DraggableHOC';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Col1, Col2 } from './Columns';
import { Node } from './Node';
import { ZoomState } from '../ZoomContext';
import { ColumnButton } from 'src/styles/Button';

interface INodeActions {
  paragraphs: IParagraph[];
  deleteNode: (id: ID) => void;
  activeNode: string;
  setActiveNode: (id: string) => void;
}

interface IRNodes extends INodeActions {
  nodeCollection: IPartialNode[];
}

const renderNodes = ({
  nodeCollection,
  paragraphs,
  deleteNode,
  activeNode,
  setActiveNode
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
      <Node
        key={node.id}
        paragraphs={containedParagraphs}
        node={node}
        setActiveNode={setActiveNode}
        deleteNode={deleteNode}
        isActive={node.id === activeNode}
      />
    );
  });
};

const sortNodes = (
  nodes: IPartialNode[],
  col: Position,
  paragraphs: IParagraph[],
  deleteNode: (id: ID) => void,
  activeNode: string,
  setActiveNode: (id: string) => void
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
    setActiveNode
  });
};

interface IRenderProps {
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
  deleteNode: (id: ID) => void;
    addNode: (col: Position) => void;

}

const MainStage = props => {
  const [activeNode, setActiveNode] = useState('');
  console.log(activeNode)
  return (
    <CV>
      {({ header, nodes, paragraphs, deleteNode, addNode }: IRenderProps) => (
        <DraggableHOC>
          <ZoomState>
            {({ zoomValue }) => (
              <StyledMainStage zoom={zoomValue}>
                <Col1>
                  {sortNodes(
                    nodes,
                    Position.COL1,
                    paragraphs,
                    deleteNode,
                    activeNode,
                    setActiveNode
                  )}
                  <ColumnButton onClick={() => addNode(Position.COL1)} />
                </Col1>
                <Col2>
                  {sortNodes(
                    nodes,
                    Position.COL2,
                    paragraphs,
                    deleteNode,
                    activeNode,
                    setActiveNode
                  )}
                  <ColumnButton onClick={() => addNode(Position.COL2)} />
                </Col2>
              </StyledMainStage>
            )}
          </ZoomState>
        </DraggableHOC>
      )}
    </CV>
  );
};

export default MainStage;
