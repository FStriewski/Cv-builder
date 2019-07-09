import * as React from 'react';
const { useState } = React;

import CV from '../../data/Cvdata';
import Dropdown from '../../lib/DropDown';
import { Button } from '../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../styles/Dropdown';

export type FontFamily = {
  family: string;
};

const FONT_FAMILY: FontFamily[] = [
  {
    family: 'sans-serif'
  },
  {
    family: 'none'
  },
  {
    family: 'monospace'
  },
  {
    family: 'fantasy'
  },
  {
    family: 'serif'
  },

];

export const FontFamily = props => (
  <CV>
    {({ updateStyle }) => (
      <Dropdown
        autoClose={true}
        handler={onToggle => <Button onClick={onToggle}>Family</Button>}
      >
        <StyledDropdownList>
          {FONT_FAMILY.map((font, index) => (
            <DropdownListItem
              key={index}
              onClick={() =>
                updateStyle(props.selectedElement, {
                  fontFamily: font.family
                })
              }
            >
              {font.family}
            </DropdownListItem>
          ))}
        </StyledDropdownList>
      </Dropdown>
    )}
  </CV>
);
