// presets
import {combineReducers} from "redux";

// importing reducers


// importing action-listeners
import reducerListener from "./reducer-listener.jsx";

const allReducers = combineReducers({
        reducerListener: reducerListener,
    });

export default allReducers;