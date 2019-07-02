import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Node = styled<
  {
    x: number;
    y: number;
  },
  'div'
>('div')`
x:${props => props.x};
y:${props => props.y};
  width: 100%;
  height: 150px;
  background-color: white;
  border: 1px solid ${SCHEMA_1.COLOR_3};
  text-align: center;
  z-index: 10;
    position: relative;

`;

const setBorder = (selected: boolean) => {
  if (selected) {
    return '1px dashed grey';
  }
};

export const TextElement = styled<
  {
    selected: boolean;
    color: string;
  },
  'div'
>('div')`
  border: ${props => setBorder(props.selected)};
  color: ${props => props.color};
  padding: 5px;
`;

export const InactiveText = styled.div`
  position: relative;
  white-space: pre-wrap;
`;

// export const DraftTextElement = styled.div`
//   /* fixes draft-js placeholder cursor position: */
//   .public-DraftEditorPlaceholder-root {
//     position: absolute;
//     z-index: 0;
//     margin-left: auto;
//     margin-right: auto;
//     left: 0;
//     right: 0;
//   }

//   /* fixes draft-js placeholder editing */
//   .public-DraftEditor-content[contenteditable='true'] {
//     -webkit-user-modify: read-write-plaintext-only;
//   }

//   .DraftEditor-editorContainer {
//     background-color: rgba(255, 255, 255, 0);
//     border-left: 0.1px solid transparent;
//     position: relative;
//     z-index: 1;
//   }

//   .public-DraftEditorPlaceholder-hasFocus {
//     color: #bdc1c9;
//   }
// `;
