import { legacy_createStore as createStore } from "redux";
import { storedData } from "../Reducer/DataStore";


export const store = createStore(storedData);