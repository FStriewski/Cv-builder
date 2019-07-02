import * as React from 'react';
const {useState} = React; 


import { ColorTile, ColorCollection } from '../../styles/Color';
import CV from '../../data/Cvdata';

interface IProps {
  id: ID;
  activeColor: string;
  colorList: string[];
}

export const ColorList = () => {
const [colorList, addColor] = useState([])

}

export const ColorPicker = ({ id, activeColor, colorList }: IProps) => (
  <CV>
    {({ updateColor }) => (
      <ColorCollection>
        {colorList.map(color => {
          const active = color.colorValue === activeColor;
          return (
            <ColorTile
              key={color.id}
              color={color.colorValue}
              onClick={() => {
                updateColor(id, {color.colorValue});
              }}
              isActive={active}
            >
              {active ? null : null}
            </ColorTile>
          );
        })}
      </ColorCollection>
    )}
  </CV>
);

export default ColorPicker;
