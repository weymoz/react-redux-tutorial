import { ADD_ARTICLE } from '../constants/action-types'

const initialState = {
    articles: []
}

const rootReducer = (state = initialState, action) => {
    if ( action.type === ADD_ARTICLE ) {
        const newState = {
            ...state,
            articles: [...state.articles, action.payload]
        }

        return newState
    }

    return state
}

export default rootReducer