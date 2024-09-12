import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import * as globalReducers from './slices';

const rootReducer = combineReducers({
    ...globalReducers,
});

const configureAppStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export const rootStore = configureAppStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootStore.dispatch;

// Define redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
