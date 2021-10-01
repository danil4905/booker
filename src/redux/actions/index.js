import axios from "axios";
import { useSelector } from "react-redux";
import { URLs } from "../../api/constants";
import { constants } from "../const/constants";

export const startFetching = () => ({
  type: constants.content.CONTENT_FETCHING,
});

export const searchBooks = (title, category, sortingType) => {
  console.log(title, category, sortingType);
  return async (dispatch) => {
    try {
      let url;
      if (category === "all")
        url = `${URLs.BOOK}${title}&orderBy=${sortingType}&maxResults=30`;
      else
        url = `${URLs.BOOK}${title}+subject:${category}&orderBy=${sortingType}&maxResults=30`;
      console.log(url);
      const response = await axios.get(url);
      dispatch({
        type: constants.content.CONTENT_LOADING_SUCCESS,
        payload: response.data.items,
        count: response.data.totalItems,
        link: url,
      });
    } catch (e) {
      console.log(e.response);
      if (e.response)
        dispatch({
          type: constants.content.CONTENT_LOADING_FAILURE,
          payload: e.response.data.error.mesage,
        });
    }
  };
};

export const changeInputs = (name, value) => ({
  type: constants.controls.CONTROLS_CHANGE,
  payload: {
    name: name,
    value: value,
  },
});

export const getBook = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URLs.BOOKBYID + id);
      dispatch({
        type: constants.book.BOOK_LOADING_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      alert(e.response);
      if (e.response)
        dispatch({
          type: constants.book.BOOK_LOADING_FAILURE,
          payload: e.response.data.error.mesage,
        });
    }
  };
};
export const Paginate = (index,content,url) => {
    
    return async (dispatch) => {
      try {
        const response = await axios.get(url + "&startIndex=" + index);
        dispatch({
          type: constants.content.PAGINATE_CONTANT_SUCCESS,
          payload: content.concat(response.data.items),
        });
      } catch (e) {
        alert(e.response);
        if (e.response)
          dispatch({
            type: constants.content.PAGINATE_CONTENT_FAILURE,
            payload: e.response.data.error.mesage,
          });
      }
    };
}
export const paginateStart = () => ({ type: constants.content.PAGINATE_PROCESS });