import { MODAL_CLOSE, MODAL_OPEN } from "../types"

export default (state, action) => {
    switch (action.type) {
        case MODAL_CLOSE:
            return {
                ...state,
                open: false
            }
        case MODAL_OPEN:
            return {
                ...state,
                open: true,
            }
        default:
            return state
    }
}
