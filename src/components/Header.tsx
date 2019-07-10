import * as React from 'react';
import { Header as StyledHeader } from '../styles/Header';
import { Zoom } from './Zoom';
import { PrintButton } from 'src/styles/Button';

const Header = ({ print }) => (
    <StyledHeader>
      <Zoom />
      <PrintButton onClick={print}>Print</PrintButton>
    </StyledHeader>
);

export default Header;
