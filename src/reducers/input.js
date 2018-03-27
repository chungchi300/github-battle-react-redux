export default function input(
  state = {
    playerOneInput: '',
    playerTwoInput: '',
  },
  action,
) {
  switch (action.type) {
    case 'SET_INPUT':
      ///... is equal to Object.assign
      return {
        ...state,
        [action.payload.id + 'Input']: action.payload.val,
      };
    default:
      return state;
  }
}
