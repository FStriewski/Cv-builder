import * as React from 'react';
const { useState } = React;

interface IZoomContext {
  zoomValue: number;
  updateZoomValue: (value: number) => void;
}

const Ctx = React.createContext({} as IZoomContext);
export const ZoomState = Ctx.Consumer;
const { Provider } = Ctx;

export const ZoomStateProvider = props => {
  const [zoomValue, setZoomValue] = useState(1);

  const updateZoomValue = (zoomLevel: number) => setZoomValue(zoomLevel)

  return (
    <Provider
      value={{
        updateZoomValue,
        zoomValue
      }}
    >
      {props.children}
    </Provider>
  );
};
