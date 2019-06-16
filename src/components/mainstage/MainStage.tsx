import * as React from 'react';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { DraggableHOC, DragState } from '../../lib/DraggableHOC';
import { Node } from './Element';
import { Col1, Col2 } from './Columns';
import CV from '../../data/Cvdata';
import { Position } from 'src/types';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';
import ModeSetting from '../../data/Mode';


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
        <SelectionStateProvider>
              <StyledMainStage>
                <Col1>{sortNodes(data, Position.LEFT)}</Col1>
                <Col2>{sortNodes(data, Position.RIGHT)}</Col2>
              </StyledMainStage>
        </SelectionStateProvider>
      </DraggableHOC>
    )}
  </CV>
);

export default MainStage;
