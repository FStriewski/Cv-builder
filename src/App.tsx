import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';
import { CVState } from './data/Cvdata';
import {ICV} from './types';

// Shall be provided by API
const initialState: ICV = {
  header: {
    email: 'email',
    firstName: 'first',
    phone: 'phone',
    secondName: 'second',
  },
  id: 'ddd',
  nodes: [{
    id: 'nnn',
    paragraphs: [
      {
        content: 'Test',
        height: 100,
        id: 'ttt',
        left: 0,
        name: 'eee',
        style: {},
        top: 0,
        width: 200,
      },
        {
        content: 'Test2',
        height: 100,
        id: 'ttt',
        left: 0,
        name: 'fff',
        style: {},
        top: 0,
        width: 200,
      },
    ],
  }],
}

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
