import * as React from 'react';
const { useState } = React;

import CV from '../../data/Cvdata';
import Dropdown from '../../lib/DropDown';
import { Button } from '../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../styles/Dropdown';

export type FontWeight = {
  weight: number;
};

const FONT_WEIGHTS: FontWeight[] = [
  {
    weight: 100
  },
  {
    weight: 200
  },
  {
    weight: 300
  },
  {
    weight: 400
  },
  {
    weight: 500
  },
  {
    weight: 600
  },
  {
    weight: 700
  },
  {
    weight: 800
  }
];

export const FontWeight = props => (
  <CV>
    {({ updateStyle }) => (
      <Dropdown
        autoClose={true}
        handler={onToggle => <Button onClick={onToggle}>Weight</Button>}
      >
        <StyledDropdownList>
          {FONT_WEIGHTS.map((font, index) => (
            <DropdownListItem
              key={index}
              onClick={() =>
                updateStyle(props.selectedElement, {
                  fontWeight: font.weight
                })
              }
            >
              {font.weight}
            </DropdownListItem>
          ))}
        </StyledDropdownList>
      </Dropdown>
    )}
  </CV>
);
