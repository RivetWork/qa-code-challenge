import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  theme: 'light' | 'dark';
  pageSize: number;
  density: 'comfortable' | 'compact';
  showFields: {
    types: boolean;
    abilities: boolean;
    heightWeight: boolean;
    stats: boolean;
    description: boolean;
  };
};

const initialState: SettingsState = {
  theme: 'light',
  pageSize: 20,
  density: 'comfortable',
  showFields: { types: true, abilities: true, heightWeight: true, stats: true, description: true },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme(state: SettingsState, action: PayloadAction<SettingsState['theme']>) {
      state.theme = action.payload;
      document.documentElement.setAttribute('data-theme', state.theme);
    },
    setPageSize(state: SettingsState, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    setDensity(state: SettingsState, action: PayloadAction<SettingsState['density']>) {
      state.density = action.payload;
    },
    setShowFields(
      state: SettingsState,
      action: PayloadAction<Partial<SettingsState['showFields']>>
    ) {
      state.showFields = { ...state.showFields, ...action.payload };
    },
  },
});

export const { setTheme, setPageSize, setDensity, setShowFields } = settingsSlice.actions;
export default settingsSlice.reducer;
