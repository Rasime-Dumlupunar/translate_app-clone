import languageReducer from "./slices/languageSlice";
import { configureStore }  from "@reduxjs/toolkit";
import translateReducer from "./slices/translateSlice";


export default configureStore({
    reducer: { languageReducer, translateReducer },
});