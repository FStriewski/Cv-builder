import * as React from 'react';
import { ID, ITextElement, ICV } from '../types';

interface IRenderProps {
  data: ICV;
  updatePosition: (id,x,y) => void
}

interface IProps {
  initialState: ICV;
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class CVState extends React.Component<IProps, ICV> {
  constructor(props: IProps) {
    super(props);
    this.state = this.props.initialState;
  }

  updateNodePosition = (id, x, y) => {
    this.setState({
      ...this.state,
      nodes: this.state.nodes.map(node => {
        if (node.id === id) {
          return {
            ...node,
            x,
            y
          };
        }
        return node;
      })
    });
  };

  render() {
    return (
      <Provider
        value={{
          data: this.state,
          updatePosition: this.updateNodePosition,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
