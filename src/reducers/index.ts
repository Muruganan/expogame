import {combineReducers, configureStore} from '@reduxjs/toolkit';
import getGameListSlice from "../api/slice/getGameListSlice"

const rootReducer = combineReducers({
    getGameList: getGameListSlice
});

const rootReducerW = (state:any, action:any) => {
    return rootReducer(state, action);
}

const store = configureStore({
    reducer: rootReducerW,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});
export default store;
