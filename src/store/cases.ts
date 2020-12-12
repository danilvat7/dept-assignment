/**
 * Cases store
 */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICase } from '../interfaces/case';
import { fakeApi } from '../api/fakeApi';
import { mapUniqItems } from '../utils/index';

type State = {
  cases: ICase[];
  filteredCases: ICase[];
  categories: string[];
  industries: string[];
};
const initialState: State = {
  cases: [],
  filteredCases: [],
  categories: [],
  industries: [],
};

// thunks
export const fetchCases = createAsyncThunk('cases/fetchCases', async () => {
  const response = await fakeApi.fetchCases();
  return response;
});

// cases slice
export const cases = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    filterCases: (state, action: PayloadAction<{ [key: string]: string }>) => {
      const filterObj = action.payload;
      state.filteredCases = state.cases.filter((caseItem: any) => {
        for (const [filterName, filterValue] of Object.entries(filterObj)) {
          if (filterValue && caseItem[filterName] !== filterValue) {
            return false;
          }
        }
        return true;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, { payload }) => {
      state.cases = payload;
      state.filteredCases = payload;
      state.categories = mapUniqItems(payload, 'category');
      state.industries = mapUniqItems(payload, 'industry');
    });
  },
});

// Actions
export const { filterCases } = cases.actions;

// Selectors
export const selectFilteredCases = (state: { cases: State }) =>
  state.cases.filteredCases;
export const selectCategories = (state: { cases: State }) =>
  state.cases.categories;
export const selectIndustries = (state: { cases: State }) =>
  state.cases.industries;

export default cases.reducer;
