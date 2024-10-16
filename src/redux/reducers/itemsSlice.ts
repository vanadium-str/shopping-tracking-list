import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import items from '../../db/items.json';
import { Item } from '../../types';

const initialState: Item[] = items;

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateReceivedField: (state, action: PayloadAction<string>) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.received = true;
      }
    },
  }
});

export const { updateReceivedField } = itemsSlice.actions;
export default itemsSlice.reducer;