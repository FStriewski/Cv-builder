import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from '../../lib/DraggableHOC';
import { Node } from './Element';
import { Col1, Col2 } from './Columns';
import CV from '../../data/Cvdata';
import { Position, IPartialNode, IHeader, IParagraph } from 'src/types';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';

interface IRNodes {
  nodeCollection: IPartialNode[];
  paragraphs: IParagraph[];
}

const renderNodes = ({ nodeCollection, paragraphs }: IRNodes) => {
  if (!nodeCollection) {
    return <div />;
  }
  const fullNodeCollection = nodeCollection.map(node => {
    const containedParagraphs = paragraphs.filter(p => p.parentId === node.id);

    return {
      containedParagraphs,
      node,
    };
  });

  return fullNodeCollection.map(item => {
const {node, containedParagraphs} = item;

   return  <Node
      key={node.id}
      paragraphs={containedParagraphs}
      node={node}
    />
  });
  console.log(nodeCollection);
  return nodeCollection;
};

const sortNodes = (
  nodes: IPartialNode[],
  col: Position,
  paragraphs: IParagraph[]
) => {
  if (nodes === []) {
    return;
  }
  const nodeCollection = nodes.filter(node => node.col === col);
  return renderNodes({ nodeCollection, paragraphs });
};

interface IRenderProps {
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
}

const MainStage = () => (
  <CV>
    {({ header, nodes, paragraphs }: IRenderProps) => (
      <DraggableHOC>
        <SelectionStateProvider>
          <StyledMainStage>
            <Col1>{sortNodes(nodes, Position.LEFT, paragraphs)}</Col1>
            <Col2>{sortNodes(nodes, Position.RIGHT, paragraphs)}</Col2>
          </StyledMainStage>
        </SelectionStateProvider>
      </DraggableHOC>
    )}
  </CV>
);

export default MainStage;
