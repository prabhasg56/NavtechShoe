import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const baseUrl = "https://13be-2409-40f2-1035-1f21-7ae-20d1-1f9a-a4ce.ngrok.io";

export const store = legacy_createStore(reducer);