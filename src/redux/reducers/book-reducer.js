import { constants } from "../const/constants";

const INITIAL_STATE = {
  content: null,
  isLoading:false,
  error: '',
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.book.BOOK_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: action.payload,
      };
    case constants.book.BOOK_LOADING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case constants.book.BOOK_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default bookReducer;
