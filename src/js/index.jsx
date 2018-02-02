//importing presets
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
require('../scss/main.scss');



// //importing various files:
import CombinedReducers from "./reducers/combine-reducers.jsx";
import TheGame from "./components/TheGame.jsx";

//Store creator

const store = createStore(CombinedReducers);

ReactDOM.render(

        <Provider store= {store}>
            <TheGame/>
        </Provider>,
    document.getElementById("root")
);

