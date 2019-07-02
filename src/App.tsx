import * as React from 'react';
import { ZoomStateProvider } from './components/ZoomContext';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { CVState } from './data/Cvdata';
import { ModeState } from './data/Mode';
import { App as StyledApp } from './styles/App';
import './styles/index';
import { ICV, Position } from './types';
import SelectionState, { SelectionStateProvider } from './lib/Selection';

const DEFAULT_COLOR = '#000000';

// Shall be provided by API
const initialState: ICV = {
  header: {
    email: 'email',
    firstName: 'first',
    phone: 'phone',
    secondName: 'second'
  },
  id: 'cv',
  nodes: [
    {
      col: Position.LEFT,
      id: 'N1',
      paragraphs: [
        {
          content: 'Left',
          height: 100,
          id: 'N1P1',
          left: 0,
          name: 'eee',
          style: {
            color: DEFAULT_COLOR
          },
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'N1P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR },
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 400
    },
    {
      col: Position.LEFT,
      id: 'N2',
      paragraphs: [
        {
          content: 'Left',
          height: 100,
          id: 'N2P1',
          left: 0,
          name: 'eee',
          style: { color: DEFAULT_COLOR },
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'N2P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR },
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 0
    },

    {
      col: Position.RIGHT,
      id: 'N3',
      paragraphs: [
        {
          content: 'Test',
          height: 100,
          id: 'N3P1',
          left: 0,
          name: 'eee',
          style: { color: DEFAULT_COLOR },
          top: 0,
          width: 200
        },
        {
          content: 'Test2',
          height: 100,
          id: 'N3P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR },
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 0
    }
  ]
};

class App extends React.Component {
  public render() {
    return (
      <CVState json={initialState}>
        <ModeState>
          <SelectionStateProvider>
            <SelectionState>
              {({ selectedId }) => (
                <ZoomStateProvider>
                  <StyledApp>
                    <Header />
                    <SideBar selected={selectedId} />
                    <MainStage selected={selectedId} />
                  </StyledApp>
                </ZoomStateProvider>
              )}
            </SelectionState>
          </SelectionStateProvider>
        </ModeState>
      </CVState>
    );
  }
}

export default App;
