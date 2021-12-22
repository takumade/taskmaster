import {
  atom,
} from 'recoil';

const NewBoardState = atom({
  key: 'newBoardState',
  default: false,
});

export default NewBoardState;
