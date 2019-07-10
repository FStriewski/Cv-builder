import styled from './styled-components';

export const Column = styled<
  {
    width: number;
  },
  'div'
>('div')`
  height: calc(100vh-45px;);
  flex-shrink: 0;
  position: relative;
  z-index: 2;

  width: calc(${props => props.width}% - 2px);
  float: left;

  overflow: hidden;
  border: 1px dotted grey;
  background-color: #f5f5f5;
  margin-top: -2px;

  :first-child{
    border-right: none;
  }

`;
