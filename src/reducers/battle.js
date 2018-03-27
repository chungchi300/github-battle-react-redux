export default function battle(
  state = {
    playerOneImage: '',
    playerOneName: '',
    playerTwoImage: '',
    playerTwoName: '',
  },
  action,
) {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
      ///... is equal to Object.assign
      return {
        ...state,
        [action.payload.id + 'Name']: action.payload.name,
        [action.payload.id + 'Image']:
          'https://github.com/' + action.payload.name + '.png?size=200',
      };
    case 'RESET_PLAYER':
      ///... is equal to Object.assign
      return {
        ...state,
        [action.payload.id + 'Name']: '',
        [action.payload.id + 'Image']: '',
      };
    default:
      return state;
  }
}
