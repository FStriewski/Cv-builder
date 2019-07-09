import * as React from 'react';
import { ContentState, Editor, EditorState } from 'draft-js';

import { ActiveText, InactiveText } from '../../styles/Element';
import { ID, ITextElement } from '../../types';
import CV from '../../data/Cvdata';

type Props = ITextElement & {
  autoFocus?: boolean;
  content?: string;
  id: ID;
  selected: boolean;
};

interface IState {
  editorState: EditorState;
  editorParent: any;
}

export class DraftTextElement extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editorParent: null
    };
  }

  componentDidMount() {
    const textContent = ContentState.createFromText(this.props.content || '');

    this.setState({
      editorState: EditorState.createWithContent(textContent)
    });
  }

  setText = (id: ID, content: string) => null; // set text in document
  saveText = (id: ID, content: string) => null; // save text  to BE

  onChange = (
    editorState: EditorState,
    updateContent: (id: ID, content: string) => void,
    content: string,
    id: ID
  ) => this.setState({ editorState }, () => updateContent(id, content));

  /* tslint:disable: jsx-no-lambda */
  render() {
    return (
      <CV>
        {({ updateContent }) => (
          <React.Fragment>
            {this.props.selected ? (
              <ActiveText>
                <Editor
                  editorState={this.state.editorState}
                  onChange={editor => {
                    const content = editor.getCurrentContent().getPlainText();
                    if (content !== this.props.content) {
                      this.setText(this.props.id, content);
                    }
                    this.onChange(
                      editor,
                      updateContent,
                      content,
                      this.props.id
                    );
                  }}
                  placeholder="Placeholder"
                />
              </ActiveText>
            ) : (
              <InactiveText>
                {this.state.editorState.getCurrentContent().getPlainText()}
              </InactiveText>
            )}
          </React.Fragment>
        )}
      </CV>
    );
  }
}
