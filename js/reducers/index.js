const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        items: state.items.concat([action.item])
      }
    default:
      return state
  }
}

export default todo
