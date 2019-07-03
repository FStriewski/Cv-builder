import * as React from 'react';
import { IHeader, IParagraph, IPartialNode, Position } from 'src/types';
import CV from '../../data/Cvdata';
import { DraggableHOC } from '../../lib/DraggableHOC';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Col1, Col2 } from './Columns';
import { Node } from './Element';
import {ZoomState} from '../ZoomContext';

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
      node
    };
  });

  return fullNodeCollection.map(item => {
    const { node, containedParagraphs } = item;

    return <Node key={node.id} paragraphs={containedParagraphs} node={node} />;
  });
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

const MainStage = (props) => (
  <CV>
    {({ header, nodes, paragraphs }: IRenderProps) => (
      <DraggableHOC>
          <ZoomState>
            {({zoomValue}) => (
              <StyledMainStage zoom={zoomValue}>
                <Col1>{sortNodes(nodes, Position.COL1, paragraphs)}</Col1>
                <Col2>{sortNodes(nodes, Position.COL2, paragraphs)}</Col2>
              </StyledMainStage>
            )}
          </ZoomState>
      </DraggableHOC>
    )}
  </CV>
);

export default MainStage;
