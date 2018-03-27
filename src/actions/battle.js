export function setPlayerName(id, name) {
  return {type: 'SET_PLAYER_NAME', payload: {id: id, name: name}};
}
export function resetPlayer(id) {
  return {type: 'RESET_PLAYER', payload: {id: id}};
}
