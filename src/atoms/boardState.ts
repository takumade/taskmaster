import {
  atom,
} from 'recoil';

import Column from '../interfaces/column';


const boardState = atom({
  key: 'boardState',
  default: [] as Column[],
});

export default boardState;
