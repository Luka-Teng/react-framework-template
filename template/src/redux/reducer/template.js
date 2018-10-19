import { TEMPLTATE_ACTION } from '@/redux/action/template'

const initState = {
  author: 'Luka'
}

export default (state = initState, action) => {
  switch (action.type) {
    case TEMPLTATE_ACTION:
      return Object.assign(
        {...initState},
        {author: action.payload.author}
      )
    default:
      return state
  }
}
