import { constants } from "../const/constants";

const INITIAL_STATE = {
  input: "",
  category: "all",
  sortingType: "relevance",
};

const controlsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.controls.CONTROLS_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default controlsReducer;
