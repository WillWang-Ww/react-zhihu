import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState , action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        //set 生成一个全新的对象，不改变immutable对象的值
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}
