import types from './types';
/**
 * 앱의 모든 action을 생성하는 함수들을 모아두었습니다
 */

/**
 * newNote 함수는 새롭게 생성되는 노트를 store에 저장하는 action을 생성하는 함수입니다.
 * @param note 새로 생성되는 노트입니다
 */
export const newNote = (note) => {
  console.log('Action:::NEW_NOTE');
  return {type: types.NEW_NOTE, note};
};

/**
 * selectNote 함수는 메인 화면에서 노트 하나를 선택하는 action을 생성하는 함수입니다.
 * @param index 선택된 note의 index입니다
 */
export const selectNote = (index) => {
  console.log('Action::SELECT_NOTE');
  return {type: types.SELECT_NOTE, index};
};

/**
 * unselectNote는 선택되어 있던 note를 해제해주는 action을 생성하는 함수입니다.
 */
export const unselectNote = () => {
  console.log('Action::UNSELECT_NOTE');
  return {type: types.UNSELECT_NOTE};
};

/**
 * deleteNote는 선택되어 있던 note를 삭제하는 action을 생성하는 함수입니다.
 */
export const deleteNote = () => {
  console.log('Action::DELETE_NOTE');
  return {type: types.DELETE_NOTE};
};
