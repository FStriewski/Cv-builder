import * as React from 'react';
import { ID } from '../types';

interface IState {
  selectedId: ID | null;
}

interface IRenderProps {
  select: (e: React.MouseEvent, id: ID) => void;
  selectedId: ID | null;
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const Ctx = React.createContext({} as IRenderProps);

const Selection = Ctx.Consumer;

export default Selection;

const stopPropagation = (e: React.MouseEvent) =>
  e.nativeEvent.stopImmediatePropagation();

export class SelectionStateProvider extends React.Component<{}, IState> {
         state: IState = { selectedId: null };

         componentDidMount() {
           // document.addEventListener('mousedown', this.clear);
         }

         // componentWillUnmount() {
         //   document.removeEventListener('mousedown', this.clear);
         // }

         clear = () => this.setState({ selectedId: null });

         select = (e: React.MouseEvent, selectedId: ID) => {
           stopPropagation(e);
           // this.clear();
           this.setState({
             selectedId
           });
         };

         render() {
           const Provider = Ctx.Provider;
           return (
             <Provider
               value={{
                 select: this.select,
                 selectedId: this.state.selectedId
               }}
             >
               {this.props.children}
             </Provider>
           );
         }
       }
