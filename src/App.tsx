import * as React from 'react';
import BottomBar from './components/BottomBar';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';
import { CVState } from './data/Cvdata';
import { ICV, Position } from './types';
import './styles/index';
import { ModeState } from './data/Mode';

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
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'N1P2',
          left: 0,
          name: 'fff',
          style: {},
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 0
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
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'N2P2',
          left: 0,
          name: 'fff',
          style: {},
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
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Test2',
          height: 100,
          id: 'N3P2',
          left: 0,
          name: 'fff',
          style: {},
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
          <StyledApp>
            <Header />
            <SideBar />
            <MainStage />
          </StyledApp>
        </ModeState>
      </CVState>
    );
  }
}

export default App;
