import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      const newModalState = {
        modal: action.modal,
        data: action.data,
      };
      return newModalState;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalReducer