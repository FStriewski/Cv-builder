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
import { generateNode } from './initialData';

interface IState {
  id: ID;
  header: IHeader;
  nodes: IPartialNode[];
  paragraphs: IParagraph[];
}

interface IRenderProps {
  header: IHeader;
  nodes: IPartialNode[];
  addNode: (col: Position) => void;
  deleteNode: (id: ID) => void;
  paragraphs: IParagraph[];
  updatePosition: (id: string, pos) => void;
  updateStyle: (id: string, property) => void;
  updateContent: (id: string, content: string) => void;
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
    const nodes = this.destructureNodes(this.props.json.nodes);
    const paragraphs = this.destructureParagraphs(this.props.json.nodes);
    this.setState({
      header,
      nodes,
      paragraphs
    });
  }

  destructureParagraphs = (nodes: INode[]): IParagraph[] => {
    if (nodes) {
      // add parent id to each paragraph for lookup
      const arr = nodes.map(node =>
        node.paragraphs.map(p => {
          const parentId = node.id;
          return { ...p, parentId };
        })
      );
      return [].concat.apply([], arr);
    }
    return [];
  };

  destructureNodes = (nodes: INode[]) => {
    if (nodes) {
      return nodes.map(node =>
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

  addNode = (col: Position) => {
    const genericNode = generateNode();
    const newNode = { ...genericNode, col };

    const Node = this.destructureNodes([newNode]);
    const Paragraphs = this.destructureParagraphs([newNode]);

    this.setState({
      ...this.state,
      nodes: this.state.nodes.concat(Node),
      paragraphs: this.state.paragraphs.concat(Paragraphs)
    });
  };

  deleteNode = (id: ID) =>
    this.setState({
      ...this.state,
      nodes: this.state.nodes.filter(node => node.id !== id)
    });

  getParagraph = (id: ID) => ({
    index: this.state.paragraphs.findIndex(p => p.id === id),
    result: this.state.paragraphs.find(p => p.id === id)
  });

  setParagraph = (id: ID, paragraph: IParagraph, index: number) => {
    this.setState({
      ...this.state,
      paragraphs: Object.assign([], this.state.paragraphs, {
        [index]: paragraph
      })
    });
  };

  updateStyle = (id: ID, property) => {
    const { index, result } = this.getParagraph(id);

    if (!result) {
      return;
    }
    const updatedParagraph = {
      ...result,
      style: { ...result.style, ...property }
    };

    this.setParagraph(id, updatedParagraph, index);
  };

  updateContent = (id: ID, content) => {
    const { index, result } = this.getParagraph(id);

    if (!content) {
      return;
    }
    const updatedParagraph = {
      ...result,
      content,
    };

    this.setParagraph(id, updatedParagraph, index);
  };

  render() {
    console.log(this.state.nodes)
    return (
      <Provider
        value={{
          addNode: this.addNode,
          deleteNode: this.deleteNode,
          header: this.state.header,
          nodes: this.state.nodes,
          paragraphs: this.state.paragraphs,
          updatePosition: this.updateNodePosition,
          updateStyle: this.updateStyle,
          updateContent: this.updateContent
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
