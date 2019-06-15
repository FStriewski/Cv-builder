import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from './DraggableHOC';
import { Node } from './Element';
import { Col1, Col2 } from './Columns';
import CV from '../../data/Cvdata';
import { Position } from 'src/types';

const renderNodes = nodeCollection => {
  if (!nodeCollection) {
    return <div />;
  }
  return nodeCollection.map(node => (
    <Node key={node.id} paragraphs={node.paragraphs} />
  ));
};

const sortNodes = (data, col) => {
  if (!data || !data.nodes) {
    return;
  }
  const nodeCollection = data.nodes.filter(node => node.col === col);
  return renderNodes(nodeCollection);
};

const MainStage = () => (
  <CV>
    {({ data }) => (
      <DraggableHOC>
        <StyledMainStage>
          <Col1>{sortNodes(data, Position.LEFT)}</Col1>
          <Col2>{sortNodes(data, Position.RIGHT)}</Col2>
        </StyledMainStage>
      </DraggableHOC>
    )}
  </CV>
);

export default MainStage;
