import * as React from 'react';
const { useState } = React;

import CV from '../../data/Cvdata';
import Dropdown from '../../lib/DropDown';
import { Button } from '../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../styles/Dropdown';

export type FontSize = {
  size: number;
};

const FONT_SIZES: FontSize[] = [
  {
    size: 8
  },
  {
    size: 10
  },
  {
    size: 12
  },
  {
    size: 14
  },
  {
    size: 16
  },
  {
    size: 18
  },
  {
    size: 20
  }
];

export const FontSize = props => (
  <CV>
    {({ updateStyle }) => (
      <Dropdown
        autoClose={true}
        handler={onToggle => <Button onClick={onToggle}>Size</Button>}
      >
        <StyledDropdownList>
          {FONT_SIZES.map((font, index) => (
            <DropdownListItem
              key={index}
              onClick={() =>
                updateStyle(props.selectedElement, {
                  fontSize: font.size
                })
              }
            >
              {font.size}
            </DropdownListItem>
          ))}
        </StyledDropdownList>
      </Dropdown>
    )}
  </CV>
);
