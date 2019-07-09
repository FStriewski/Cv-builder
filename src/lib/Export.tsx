import * as React from 'react';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

export default class Export extends React.Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    console.log(input)
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 500, 500);
      // pdf.output('dataurlnewwindow');
      pdf.save('download.pdf');
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Print</button>
        </div>
        <div
          // id="divToPrint"
          className="mt4"
          // {
          //   ...css({
          //   backgroundColor: '#f5f5f5',
          //   width: '210mm',
          //   minHeight: '297mm',
          //   marginLeft: 'auto',
          //   marginRight: 'auto'
          // })}
        >
          {/* <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div> */}
        </div>
      </div>
    );
  }
}
