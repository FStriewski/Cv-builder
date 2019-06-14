import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';

class App extends React.Component {
  public render() {
    return (
      <StyledApp>
        <Header />
        <SideBar />
        <MainStage />
      </StyledApp>
    );
  }
}

export default App;
