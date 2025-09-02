import type { RootState } from '@app/store';

const selectAllSettings = (state: RootState) => state.settings;
const selectTheme = (state: RootState) => state.settings.theme;
const selectPageSize = (state: RootState) => state.settings.pageSize;
const selectDensity = (state: RootState) => state.settings.density;
const selectShowFields = (state: RootState) => state.settings.showFields;

export { selectAllSettings, selectTheme, selectPageSize, selectDensity, selectShowFields };
