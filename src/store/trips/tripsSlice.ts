import { fetchTrips } from '@/api/trips';
import type { Trip, TripsResponse } from '@/types/trip';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TripsState {
    items: Trip[];
    total: number;
    hasMore: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: TripsState = {
    items: [],
    total: 0,
    hasMore: false,
    isLoading: false,
    error: null
};

export const loadTrips = createAsyncThunk<
    TripsResponse, { offset: number; limit: number }
>('trips/load', async ({ offset, limit }) => {
    const res = await fetchTrips(offset, limit);
    return res;
});

const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTrips.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadTrips.fulfilled, (state, action: PayloadAction<TripsResponse>) => {
                state.isLoading = false;
                state.items.push(...action.payload.items);
                state.total = action.payload.total;
                state.hasMore = state.items.length < action.payload.total;

            })
            .addCase(loadTrips.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Unknown error';
            });
    }
});

export const { reset } = tripsSlice.actions;
export const tripsReducer = tripsSlice.reducer;
