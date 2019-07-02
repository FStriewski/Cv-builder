import * as React from 'react';
import {
  ID,
  ICV,
  INode,
  IHeader,
  Position,
  IPartialNode,
  IParagraph
} from '../types';

interface IState {
  id: string;
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
}

interface IRenderProps {
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
  updatePosition: (id, pos) => void;
  updateColor: (id, color) => void;
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
      paragraphs: []
    };
  }

  componentDidMount() {
    const header = this.props.json.header || null;
    const nodes = this.destructureNodes(this.props.json);
    const paragraphs = this.destructureParagraphs(this.props.json);
    this.setState({
      header,
      nodes,
      paragraphs
    });
  }

  destructureParagraphs = (json: ICV): IParagraph[] => {
    if (json.nodes) {
      // add parent id to each paragraph for lookup
      const arr = json.nodes.map(node =>
        node.paragraphs.map(p => {
          const parentId = node.id;
          return { ...p, parentId };
        })
      );
      return [].concat.apply([], arr);
    }
    return [];
  };

  destructureNodes = (json: ICV) => {
    if (json.nodes) {
      return json.nodes.map(node =>
        (({ id, x, y, col }) => ({ id, x, y, col }))(node)
      );
    }
    return [];
  };

  updateNodePosition = (id: ID, position) => {
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

  getParagraph = (id: string) => this.state.paragraphs[id];

  setParagraph = (id: string, paragraph: IParagraph) => {
    if (id in this.state.paragraphs) {
      this.setState({
        ...this.state,
        paragraphs: {
          ...this.state.paragraphs,
          [id]: paragraph
        }
      });
    }
  };

  updateColor = (id, color) => {
    const p = this.getParagraph(id);
    const updatedParagraph = {
      ...p,
      style: { ...p.style, color }
    };

    this.setParagraph(id, updatedParagraph);
  };

  render() {
    console.log(this.state);
    return (
      <Provider
        value={{
          header: this.state.header,
          nodes: this.state.nodes,
          paragraphs: this.state.paragraphs,
          updateColor: this.updateColor,
          updatePosition: this.updateNodePosition
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
