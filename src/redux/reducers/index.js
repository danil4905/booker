import { combineReducers } from "redux";
import controlsReducer from "./controls-reducer";
import contentReducer from "./content-reducer";
import bookReducer from "./book-reducer";

export let rootReducers = combineReducers({
  content: contentReducer,
  controls: controlsReducer,
  book: bookReducer
});
