import { configureStore } from '@reduxjs/toolkit';
import { pokeApi } from '@api/pokeApi';
import settingsReducer from '@features/settings/state/settingsSlice';

export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    settings: settingsReducer,
  },
  middleware: (getDefault) => getDefault().concat(pokeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
