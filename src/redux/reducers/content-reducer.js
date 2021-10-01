import { constants } from "../const/constants";

const INITIAL_STATE = {
  content: null,
  isLoading: false,
  totalCount:0,
  isPaginating:false,
  link:'',
  error: "",
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.content.CONTENT_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: action.payload,
        totalCount: action.count,
        link: action.link,
      };
    case constants.content.CONTENT_LOADING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case constants.content.PAGINATE_CONTANT_SUCCESS:
      return {
        ...state,
        isPaginating: false,
        content: action.payload,
      };
    case constants.content.PAGINATE_PROCESS:
      return {
        ...state,
        isPaginating:true,
      };
    case constants.content.CONTENT_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default contentReducer;
