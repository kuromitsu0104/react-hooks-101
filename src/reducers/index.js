// action = {
//  type: 'CREATE_EVENT',
//  title: 'title'
//  body: 'body'
// }
//
// state = []
// state = [
//  { id: 1, title: 'title1', body: 'body1' },
//  { id: 2, title: 'title2', body: 'body2' },
//  { id: 3, title: 'title3', body: 'body3' }
// ]

const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id: id, ...event }]
    case'DELET_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state1
  }
}

export default events