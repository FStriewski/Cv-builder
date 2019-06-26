import * as React from 'react';
import { ID, ITextElement, ICV, INode, IHeader } from '../types';
import { Paragraph } from 'src/styles/Element';

interface IState {
  id: string;
  header: IHeader;
  nodes:INode[];
  paragraphs: ITextElement[];
}

interface IRenderProps {
  header: IHeader;
  nodes:INode[];
  paragraphs: ITextElement[];
  updatePosition: (id, pos) => void;
}

interface IProps {
  json: ICV;
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class CVState extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      header: null,
      id: null,
      nodes: [],
      paragraphs: [],
    };
  }

  componentDidMount() {
    console.log(this.props.json);
    
    const header = this.props.json.header || null;
    const nodes = this.destructureNodes(this.props.json);
    const paragraphs = this.destructureParagraphs(this.props.json);
    this.setState({
      header,
      nodes,
      paragraphs,
    });
  }

destructureParagraphs = (json: ICV) => {
      if (json.nodes) {
        return json.nodes.map(node => node.paragraphs);
      }
      return [];
    }

  destructureNodes = (json: ICV) => {
    if (json.nodes) {
      return json.nodes
    }
    return [];
  };

  updateNodePosition = (id, position) => {
    const { x, y } = position;
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

  // updateParagraph = (id, pid, content) => {
  //   this.setState({
  //     ...this.state,
  //     nodes:
  //     ...this.state.nodes,
  //     this.state.nodes.filter(node => node.id = id)
  //       if (node.id === id) {
  //         return {
  //           ...node,
  //           x,
  //           y
  //         };
  //       }
  //       return node;
  //     })
  //   };

  render() {
    console.log(this.state);
    console.log(this.state.nodes);
    return (
      <Provider
        value={{
          header: this.state.header,
          nodes: this.state.nodes,
          paragraphs: this.state.paragraphs,
          updatePosition: this.updateNodePosition
          // updateParagraph: this.updateParagraph,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
