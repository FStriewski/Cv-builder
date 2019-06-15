import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from './DraggableHOC';
import { Node } from './Element';
import { Col1, Col2 } from './Columns';
import CV, { CVState } from '../../data/Cvdata';
import { Position } from 'src/types';

const renderNodes = nodeCollection => {
  if (!nodeCollection) {
    return <div />;
  }

  return nodeCollection.map(x => <Node key={x.id} content={x.paragraphs} />);
};

const sortNodes = (data, col) => {
  if (!data || !data.nodes) {
    return;
  }

  const nodeCollection = data.nodes.filter(node => node.col === col);
  console.log(nodeCollection);
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
