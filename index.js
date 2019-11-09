/**
 * @format
 */

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";;
import { createStore } from "redux";;
import App from "./App";
import { name as appName } from "./app.json";
import store from "./store";

AppRegistry.registerComponent(
    appName,
    () => App
);
