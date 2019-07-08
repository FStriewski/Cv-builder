import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// mock @Bynder/compact/view because it's ES6 until we have a proper test there
jest.mock('@bynder/compact-view', () => ({ exec: jest.fn() }));
