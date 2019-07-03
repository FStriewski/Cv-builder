import * as React from 'react';
import SelectionState from '../../lib/Selection';
import { Node as StyledNode, TextElement as StyledTextElement } from '../../styles/Element';
import { DraftTextElement } from './TextElement';

export const ParagraphWrapper = props => (
  <SelectionState>
    {({ select, selectedId }) => (
      // tslint:disable:jsx-no-lambda
      <StyledTextElement
        onMouseDown={e => select(e, props.id)}
        selected={selectedId === props.id}
        color={props.style.color}
        fontSize={props.style.fontSize}
      >
        <DraftTextElement
          selected={selectedId === props.id}
          {...props}
        />
      </StyledTextElement>
    )}
  </SelectionState>
);
