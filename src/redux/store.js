import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const baseUrl = "https://backend-mockapi.onrender.com";

export const store = legacy_createStore(reducer);