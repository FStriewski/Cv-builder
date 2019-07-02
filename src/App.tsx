import * as React from 'react';
import { ZoomStateProvider } from './components/ZoomContext';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { CVState } from './data/Cvdata';
import { ModeState } from './data/Mode';
import { App as StyledApp } from './styles/App';
import './styles/index';
import SelectionState, { SelectionStateProvider } from './lib/Selection';
import { initialState } from './data/initialData';

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
