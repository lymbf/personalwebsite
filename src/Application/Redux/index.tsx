import {combineReducers} from "redux";
import articles from "./Reducers/articles";
import tags from "./Reducers/tags";
export default combineReducers({articles, tags})