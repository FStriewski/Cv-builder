import { mount } from 'enzyme';
import * as React from 'react';

import Consumer, { CVState } from '../src/data/Cvdata';

import { initialState } from '../src/data/initialData';

const mountCV = (json = initialState) => {
  const children = jest.fn(({}) => <div />);

  mount(
    <CVState json={json}>
      <Consumer>{children}</Consumer>
    </CVState>
  );

  return children;
};

describe('CV Data', () => {
  it("can update an element's text color", async () => {
    const data = mountCV();
    const { paragraphs, updateStyle } = data.mock.calls[1][0];

    const p = paragraphs[0];
    const color = '#123123';

    updateStyle(p.id, { color });

    expect(data.mock.calls[2][0].paragraphs[0].style.color).toBe(color);
  });
});
