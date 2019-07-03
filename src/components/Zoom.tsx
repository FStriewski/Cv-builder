import * as React from 'react';
const { useState } = React;

import Dropdown from '../lib/DropDown';
import { Button } from '../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../styles/Dropdown';

import {ZoomState} from './ZoomContext';

export type Value = {
  value: number;
};

export interface IZoom extends Value {
  label: string;
}

const DEFAULT: IZoom = {
  label: '100%',
  value: 1
};

const ZOOM_VALUES: IZoom[] = [
  {
    label: '25%',
    value: 0.25
  },
  {
    label: '50%',
    value: 0.5
  },
  {
    label: '75%',
    value: 0.75
  },
  {
    label: '100%',
    value: 1
  },
  {
    label: '200%',
    value: 2
  },
  {
    label: '300%',
    value: 3
  },
  {
    label: '400%',
    value: 4
  }
];

const getZoomValue = (value: number) => {
  const zoomvalue = ZOOM_VALUES.find(item => item.value === value) || DEFAULT;
  return zoomvalue.label;
};


export const Zoom = () => (
  <ZoomState>
    {({ zoomValue, updateZoomValue }) => (
        <Dropdown
          autoClose={true}
          handler={onToggle => (
            <Button onClick={onToggle}>{getZoomValue(zoomValue)}</Button>
          )}
        >
          <StyledDropdownList>
            {ZOOM_VALUES.map((zoom, index) => (
              <DropdownListItem
                key={index}
                onClick={() => updateZoomValue(zoom.value)}
              >
                {zoom.label}
              </DropdownListItem>
            ))}
          </StyledDropdownList>
        </Dropdown>
    )}
  </ZoomState>
);
