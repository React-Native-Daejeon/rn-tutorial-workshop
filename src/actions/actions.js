import types from './types';
/**
 * 앱의 모든 action을 생성하는 함수들을 모아두었습니다
 */

/**
 * newNote 함수는 새롭게 생성되는 노트를 store에 저장하는 action을 생성하는 함수입니다.
 * @param {object} note 새로 생성되는 노트입니다
 */
export const newNote = (note) => {
  console.log('Action:::NEW_NOTE');
  return {type: types.NEW_NOTE, note};
};
