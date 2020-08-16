import types from '../actions/types';

/**
 * 초기 앱의 state
 */
const initialState = {
  notes: [], // note의 형태는 object이며 title과 body라는 field를 갖습니다.
  select_note: undefined, // select_note는 선택한 노트에 대한 정보를 담습니다.
};

/**
 * 앱의 전체적인 note에 관한 action을 처리하는 reducer입니다
 * @param state app의 현재 state 입니다
 * @param action 발생된 action 입니다
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_NOTE: {
      return {...state, notes: [action.note, ...state.notes]};
    }
    case types.SELECT_NOTE: {
      // index를 이용해 선택한 노트를 찾아 select_note field에 넣어줍니다
      return {...state, select_note: state.notes[action.index]};
    }
    case types.UNSELECT_NOTE: {
      // 선택되어 있던 노트의 정보를 초기화 시켜줍니다
      return {...state, select_note: undefined};
    }
    default:
      return state;
  }
};

export default reducer;
