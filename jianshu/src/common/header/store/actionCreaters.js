import * as constants from './constants'
import { dispatch } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/pairs';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        
    }
}