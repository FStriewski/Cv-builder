import * as React from 'react';
import { Header as StyledHeader } from '../styles/Header';
import {Zoom} from './Zoom';

const Header = () => (
  <div>
    <StyledHeader><Zoom/></StyledHeader>
  </div>
);

export default Header;
