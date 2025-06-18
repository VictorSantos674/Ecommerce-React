import { RootState } from '../../store';

export const selectProducts = (state: RootState) => state.products.items;

export const selectLoading = (state: RootState) => state.products.loading;

export const selectError = (state: RootState) => state.products.error;
