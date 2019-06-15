import * as React from 'react';
import {ID, ITextElement, ICV} from '../types';

interface IRenderProps {
  data: ICV;
};

interface IProps {
  initialState: ICV;
};

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class CVState extends React.Component<IProps, ICV> {
         constructor(props: IProps) {
           super(props);
           this.state = this.props.initialState;
         }
         render() {
           console.log(this.state)
           return (
             <Provider
               value={{
                 data: this.state
               }}
             >
               {this.props.children}
             </Provider>
           );
         }
       }