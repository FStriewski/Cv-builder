import styled from './styled-components';

export const MainStage = styled<
  { zoom: number },
  'div'
>('div')`
  height: calc(100vh - 60px);
  display: flex;
  flex-wrap: nowrap;
  transform: scale(${props => props.zoom});
`;
