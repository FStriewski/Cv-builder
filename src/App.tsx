import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';
import { CVState } from './data/Cvdata';
import { ICV, Position } from './types';

// Shall be provided by API
const initialState: ICV = {
  header: {
    email: 'email',
    firstName: 'first',
    phone: 'phone',
    secondName: 'second'
  },
  id: 'ddd',
  nodes: [
    {
      col: Position.LEFT,
      id: 'Node1',
      paragraphs: [
        {
          content: 'Left',
          height: 100,
          id: 'p1',
          left: 0,
          name: 'eee',
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'p2',
          left: 0,
          name: 'fff',
          style: {},
          top: 0,
          width: 200
        }
      ]
    },
    {
      col: Position.LEFT,
      id: 'Node2',
      paragraphs: [
        {
          content: 'Left',
          height: 100,
          id: 'p1',
          left: 0,
          name: 'eee',
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Left2s',
          height: 100,
          id: 'p2',
          left: 0,
          name: 'fff',
          style: {},
          top: 0,
          width: 200
        }
      ]
    },

    {
      col: Position.RIGHT,
      id: 'Node3',
      paragraphs: [
        {
          content: 'Test',
          height: 100,
          id: 'p1',
          left: 0,
          name: 'eee',
          style: {},
          top: 0,
          width: 200
        },
        {
          content: 'Test2',
          height: 100,
          id: 'p2',
          left: 0,
          name: 'fff',
          style: {},
          top: 0,
          width: 200
        }
      ]
    }
  ]
};

class App extends React.Component {
  public render() {
    return (
      <CVState initialState={initialState}>
        <StyledApp>
          <Header />
          <SideBar />
          <MainStage />
        </StyledApp>
      </CVState>
    );
  }
}

export default App;
