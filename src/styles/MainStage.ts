import styled from './styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const MainStage = styled<{ zoom: number }, 'div'>('div')`
  width: 195%;
  position: relative;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  transform: scale(${props => props.zoom});
`;
