import * as React from 'react';
const { useState } = React;

import Dropdown from '../lib/DropDown';
import { Button } from '../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../styles/Dropdown';

interface IValue {
  value: number;
  label: string;
};

const DEFAULT: IValue = {
  label: '100%',
  value: 1,
};

const ZOOMVALUES: IValue[] = [
  {
    label: '25%',
    value: 0.25,
  },
  {
    label: '50%',
    value: 0.5,
  },
  {
    label: '75%',
    value: 0.75,
  },
  {
    label: '100%',
    value: 1,
  },
  {
    label: '200%',
    value: 2,
  },
  {
    label: '300%',
    value: 3,
  },
  {
    label: '400%',
    value: 4,
  }
];

const getZoomValue = (value: number) => {
  const zoomvalue = ZOOMVALUES.find(item => item.value === value) || DEFAULT;
  return zoomvalue.label;
};

export const Zoom = () => {
  const [zoomValue, setZoomValue] = useState({ value: 1 });

  return (
    <div>
      <Dropdown
        autoClose={true}
        handler={(onToggle) => (
          <Button onClick={onToggle}>
            {getZoomValue(zoomValue.value)}
          </Button>
        )}
      >
        <StyledDropdownList>
          {ZOOMVALUES.map((zoom, index) => (
            <DropdownListItem
              key={index}
              onClick={() => setZoomValue({value: zoom.value})}
            >
              {zoom.label}
            </DropdownListItem>
          ))}
        </StyledDropdownList>
      </Dropdown>
    </div>
  );
};
