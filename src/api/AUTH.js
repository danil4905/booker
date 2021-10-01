import axios from "axios";
import {URLs} from './constants';

export default axios.create({
  baseURL: URLs.AUTH,
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
