import * as React from 'react';
import { Column } from '../../styles/Columns';

export const Col1 = ({ children }) => <Column width={60}>{children}</Column>;

export const Col2 = ({ children }) => <Column width={40}>{ children }</Column>;
