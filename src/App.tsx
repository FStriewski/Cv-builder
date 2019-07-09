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
import { DraggableHOC } from './lib/DraggableHOC';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


class App extends React.Component {

  printDocument = () => {
    const input = document.getElementById('print');
    console.log(input);
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf');
    });
  };

  render() {
    return (
      <CVState json={initialState}>
        <ModeState>
          <DraggableHOC>
            <SelectionStateProvider>
              <SelectionState>
                {({ selectedId }) => (
                  <ZoomStateProvider>
                    <StyledApp>
                      <Header print={this.printDocument} />
                      <SideBar selected={selectedId} />
                      <MainStage
                      />
                    </StyledApp>
                  </ZoomStateProvider>
                )}
              </SelectionState>
            </SelectionStateProvider>
          </DraggableHOC>
        </ModeState>
      </CVState>
    );
  }
}

export default App;
