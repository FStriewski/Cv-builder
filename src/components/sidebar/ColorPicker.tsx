import * as React from 'react';
const { useState } = React;

import { ColorTile, ColorCollection } from '../../styles/Colors';
import CV from '../../data/Cvdata';

const DEFAULT_COLORS: string[] = ['#000000', '#c0c0c0', '#ffffff', '#ff0000'];

export const ColorList = (props) => {
  const [colorList, setColor] = useState(DEFAULT_COLORS);

  const addColor = (color: string) => setColor([...colorList, color]);

  const removeColor = (color: string) =>
    setColor(colorList.filter(item => item !== color));

  return props.children({
    addColor,
    colorList,
    removeColor
  });
};

export const ColorPicker = (props) => (
  <CV>
    {({ updateStyle }) => (
      <ColorList>
        {({ colorList }) => (
          <ColorCollection>
            {colorList.map(color => {
              return (
                <ColorTile
                  key={color}
                  color={color}
                  onClick={() => {
                    updateStyle(props.selectedElement, {color});
                  }}
                />
              );
            })}
          </ColorCollection>
        )}
      </ColorList>
    )}
  </CV>
);
