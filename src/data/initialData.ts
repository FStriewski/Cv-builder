import { ICV, Position } from '../types';

const DEFAULT_COLOR = '#000000';
const INACTIVE_COLOR = '#c0c0c0';
const DEFAULT_SIZE = 12;
const BIG_SIZE = 18;

const generateId = () => Math.floor(Math.random() * Math.random() * 100000)

export const generateNode = () => {
  const Id = generateId();
  return {
    col: -1,
    id: `${Id}`,
    paragraphs: [
      {
        content: 'Placeholder',
        height: 100,
        id: `${Id}` + 'P1',
        left: 0,
        name: 'generic',
        style: { color: DEFAULT_COLOR, fontSize: BIG_SIZE, },
        top: 0,
        width: 200
      },
      {
        content: 'Placeholder',
        height: 100,
        id: `${Id}` + 'P2',
        left: 0,
        name: 'generic',
        style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
        top: 0,
        width: 200
      },
      {
        content: 'Placeholder',
        height: 100,
        id: `${Id}` + 'P3',
        left: 0,
        name: 'generic',
        style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
        top: 0,
        width: 200
      },
      {
        content: 'Placeholder',
        height: 100,
        id: `${Id}` + 'P4',
        left: 0,
        name: 'generic',
        style: { color: INACTIVE_COLOR, fontSize: DEFAULT_SIZE, },
        top: 0,
        width: 200
      },
    ],
    x: 0,
    y: 400
  }
}


// Shall be provided by API
export const initialState: ICV = {
  header: {
    email: 'email',
    firstName: 'first',
    phone: 'phone',
    secondName: 'second'
  },
  id: 'cv',
  nodes: [
    {
      col: Position.COL2,
      id: 'N1',
      paragraphs: [
        {
          content: 'Languages',
          height: 100,
          id: 'N1P1',
          left: 0,
          name: 'Header',
          style: {
            color: DEFAULT_COLOR,
            fontSize: BIG_SIZE,
          },
          top: 0,
          width: 200
        },
        {
          content: 'English [5]',
          height: 100,
          id: 'N1P2',
          left: 0,
          name: 'Stuff',
          style: {
            color: DEFAULT_COLOR,
            fontSize: DEFAULT_SIZE,
          },
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 400
    },
    {
      col: Position.COL2,
      id: 'N2',
      paragraphs: [
        {
          content: 'Hobbies',
          height: 100,
          id: 'Header',
          left: 0,
          name: 'Header',
          style: { color: DEFAULT_COLOR, fontSize: BIG_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'This That',
          height: 100,
          id: 'N2P2',
          left: 0,
          name: 'Stuff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        }
      ],
      x: 0,
      y: 0
    },
    {
      col: Position.COL1,
      id: 'N3',
      paragraphs: [
        {
          content: 'Job Title',
          height: 100,
          id: 'N3P1',
          left: 0,
          name: 'eee',
          style: { color: DEFAULT_COLOR, fontSize: BIG_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Company',
          height: 100,
          id: 'N3P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Date',
          height: 100,
          id: 'N3P3',
          left: 0,
          name: 'fff',
          style: { color: INACTIVE_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Skills',
          height: 300,
          id: 'N3P4',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
      ],
      x: 0,
      y: 0
    },
    {
      col: Position.COL1,
      id: 'N4',
      paragraphs: [
        {
          content: 'Job Title',
          height: 100,
          id: 'N4P1',
          left: 0,
          name: 'eee',
          style: { color: DEFAULT_COLOR, fontSize: BIG_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Company',
          height: 100,
          id: 'N4P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Date',
          height: 100,
          id: 'N4P3',
          left: 0,
          name: 'fff',
          style: { color: INACTIVE_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Skills',
          height: 300,
          id: 'N4P4',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
      ],
      x: 0,
      y: 0
    },
    {
      col: Position.COL1,
      id: 'N5',
      paragraphs: [
        {
          content: 'Job Title',
          height: 100,
          id: 'N4P1',
          left: 0,
          name: 'eee',
          style: { color: DEFAULT_COLOR, fontSize: BIG_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Company',
          height: 100,
          id: 'N5P2',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Date',
          height: 100,
          id: 'N5P3',
          left: 0,
          name: 'fff',
          style: { color: INACTIVE_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
        {
          content: 'Skills',
          height: 300,
          id: 'N5P4',
          left: 0,
          name: 'fff',
          style: { color: DEFAULT_COLOR, fontSize: DEFAULT_SIZE, },
          top: 0,
          width: 200
        },
      ],
      x: 0,
      y: 0
    },
  ]
};