const INITIAL_STATE = [{ ID: 1, TEXT: 'Fazer café' }, { ID: 2, TEXT: 'Estudar React' }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ID: Math.random(), TEXT: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.ID !== action.payload.id);
    default:
      return state;
  }
}
