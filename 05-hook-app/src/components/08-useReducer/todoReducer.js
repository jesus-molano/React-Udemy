export const todoReducer = (state = [], action) => {
  if (action.type === "add") {
    return [...state, action.payload];
  }
  if (action.type === "delete") {
    return state.filter(todo => todo.id !== action.payload);
  }
  if (action.type === "toggle") {
    return state.map(todo => (
      todo.id === action.payload
        ? { ...todo, done: !todo.done }
        : todo
    ))
  }
  return state;
}