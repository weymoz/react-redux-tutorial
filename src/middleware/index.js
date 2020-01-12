import  { ADD_ARTICLE } from '../constants/action-types'
const forbiddenWords = ['spam', 'junk']

export function forbiddenWordsMiddleware({getState, dispatch}) {
    return next => action => {
        console.log(action);
        
        if(action.type === ADD_ARTICLE) {
            const found = forbiddenWords.filter(word => action.payload.title.includes(word))

            if(found.length > 0) {
                return dispatch({type: 'FOUND_BAD_WORD'})
            }

        }
        return next(action)
    }
}
