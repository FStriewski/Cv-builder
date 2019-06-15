export type ID = string;

export interface ITextStyle {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}

export interface ITextElement {
  height: number;
  width: number;
  left: number;
  top: number;
  content: string;
  style: ITextStyle;
  name: string;
}