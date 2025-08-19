import { loadTrips } from '@/store/trips';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './index';

export const useTrips = () => {
    const dispatch = useAppDispatch();
    const { items, hasMore, isLoading, error } = useAppSelector(state => state.trips);

    useEffect(() => {
        if (!items.length) {
            dispatch(loadTrips({ offset: 0, limit: 30 }));
        }
    }, [dispatch, items.length]);

    const loadMore = useCallback(() => {
        if (!isLoading && hasMore && !error) {
            dispatch(loadTrips({ offset: items.length, limit: 10 }));
        }
    }, [dispatch, items.length, isLoading, hasMore, error]);

    return { items, isLoading, hasMore, loadMore, error };
};
