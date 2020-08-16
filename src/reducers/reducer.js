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
      if (state.select_note !== undefined) {
        // 선택된 노트가 있으면 해당 노트를 편집해줍니다.
        const new_notes = [
          ...state.notes.slice(0, state.select_note),
          action.note,
          ...state.notes.slice(state.select_note + 1),
        ];
        return {...state, notes: new_notes};
      }
      // 선택된 노트가 없으면 새롭게 노트를 추가해줍니다.
      // 노트가 새롭게 추가되면 선택되는 노트도 업데이트 해줍니다
      return {...state, notes: [action.note, ...state.notes], select_note: 0};
    }
    case types.SELECT_NOTE: {
      // 선택된 노트의 index 값을 넣어줍니다.
      return {...state, select_note: action.index};
    }
    case types.UNSELECT_NOTE: {
      // 선택되어 있던 노트의 정보를 초기화 시켜줍니다
      return {...state, select_note: undefined};
    }
    case types.DELETE_NOTE: {
      // 선택되어 있던 노트를 제외하고 새로운 노트 리스트를 생성합니다
      const new_notes = state.notes.filter((_, index) => {
        return index !== state.select_note;
      });
      return {...state, notes: new_notes, select_note: undefined};
    }
    default:
      return state;
  }
};

export default reducer;
