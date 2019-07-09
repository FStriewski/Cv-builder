import * as React from 'react';
import { Header as StyledHeader } from '../styles/Header';
import { Zoom } from './Zoom';
import { Button } from 'src/styles/Button';

const Header = ({ print }) => (
    <StyledHeader>
      <Zoom />
      <Button onClick={print}>Print</Button>
    </StyledHeader>
);

export default Header;
