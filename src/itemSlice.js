import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
      ],
      searchTerm: '',
    },
    reducers: {
      setSearchTerm(state, action) {
        state.searchTerm = action.payload;
      },
    },
  });
  
  export const { setSearchTerm } = itemsSlice.actions;
  export const selectItems = (state) => state.items.items;
  export const selectSearchTerm = (state) => state.items.searchTerm;
  
  export default itemsSlice.reducer;