import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from '../../lib/DraggableHOC';
import { Node } from './Element';
import { Col1, Col2 } from './Columns';
import CV from '../../data/Cvdata';
import { Position } from 'src/types';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';


const renderNodes = nodeCollection => {
  if (!nodeCollection) {
    return <div />;
  }
  return nodeCollection.map(node => (
    <Node key={node.id}  
    {...node}
    />
  ));
};

const sortNodes = (nodes, col) => {
  if (!nodes) {
    return;
  }
  const nodeCollection = nodes.filter(node => node.col === col);
  return renderNodes(nodeCollection);
};

const MainStage = () => (
  <CV>
    {({ header, nodes }) => (
      <DraggableHOC>
        <SelectionStateProvider>
              <StyledMainStage>
                <Col1>{sortNodes(nodes, Position.LEFT)}</Col1>
                <Col2>{sortNodes(nodes, Position.RIGHT)}</Col2>
              </StyledMainStage>
        </SelectionStateProvider>
      </DraggableHOC>
    )}
  </CV>
);

export default MainStage;
