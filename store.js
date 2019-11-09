import React from 'react';
import { createStore } from "redux";
import { mainReducer } from "./reducers";
const initialState = {};
const store = createStore(mainReducer, initialState);
export default store;
