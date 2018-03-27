import battle from './battle.js';
import input from './input.js';
export default function rootReducer(state = {}, action) {
  return {
    battle: battle(state.battle, action),
    input: input(state.input, action),
  };
}
