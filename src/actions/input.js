import * as Battle from './battle';
export function setInput(id, val) {
  return {type: 'SET_INPUT', payload: {id: id, val: val}};
}
export function submitPlayer(id) {
  return async (dispatch, getState) => {
    await dispatch(Battle.setPlayerName(id, getState().input[id + 'Input']));
    // //clear original input
    // dispatch(setInput(id, ''));
  };
}
