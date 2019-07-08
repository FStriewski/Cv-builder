import { mount } from 'enzyme';
import * as React from 'react';

import Consumer, { CVState } from '../src/data/Cvdata';

import { initialState } from '../src/data/initialData';
import { Position } from '../src/types';

const mountCV = (json = initialState) => {
  const children = jest.fn(({}) => <div />);

  mount(
    <CVState json={json}>
      <Consumer>{children}</Consumer>
    </CVState>
  );

  return children;
};

describe('CV Data - Paragraphs', () => {
  const data = mountCV();
  const { paragraphs, updateStyle } = data.mock.calls[1][0];
  const p = paragraphs[0];

  it('can update an paragraphs color', async () => {
    const color = '#123123';

    updateStyle(p.id, { color });

    expect(data.mock.calls[2][0].paragraphs[0].style.color).toBe(color);
  });

  it('can update an paragraphs fontSize', async () => {
    const fontSize = 300;

    updateStyle(p.id, { fontSize });

    expect(data.mock.calls[3][0].paragraphs[0].style.fontSize).toBe(fontSize);
  });
});

describe('CV Data - Nodes', () => {
  const data = mountCV();
  const { nodes, deleteNode } = data.mock.calls[1][0];
  const n = nodes[0];

  it('can delete a node', async () => {
    const lengthB4Deletion = nodes.length;

    deleteNode(n.id);
    expect(data.mock.calls[2][0].nodes.length).toBe(lengthB4Deletion - 1);
  });
  });

describe('CV Data - Nodes', () => {
  const data = mountCV();
  const { nodes, addNode } = data.mock.calls[1][0];

  it('can add a node', async () => {
    const lengthB4Addition = nodes.length;

    addNode(Position.COL1);
    expect(data.mock.calls[2][0].nodes.length).toBe(lengthB4Addition + 1);
  });
});
