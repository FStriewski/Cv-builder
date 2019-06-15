import * as React from 'react';
import {ID, ITextElement, ICV} from '../types';

interface IRenderProps {
  cv: ICV;
};

interface IProps {
  initialState: ICV;
};

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
        height: 100,
        width: 200,
        left: 0,
        top: 0,
        content: 'Test',
        style: {},
        name: 'eee',
        id: 'ttt',
      },
        {
        height: 100,
        width: 200,
        left: 0,
        top: 0,
        content: 'Test2',
        style: {},
        name: 'fff',
        id: 'ttt',
      },
    ],
  }],
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class CVState extends React.Component<IProps, ICV> {
         constructor(props: IProps) {
           super(props);
           this.state = initialState;
         }
         render() {
           return (
             <Provider
               value={{
                 cv: this.state
               }}
             >
               {this.props.children}
             </Provider>
           );
         }
       }