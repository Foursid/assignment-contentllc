import type { TripsResponse } from '@/types/trip';

export async function fetchTrips(offset: number, limit: number): Promise<TripsResponse> {
    try {
        const url = new URL('/api/trips', window.location.origin);
        url.searchParams.set('offset', String(offset));
        url.searchParams.set('limit', String(limit));

        const res = await fetch(url.toString());

        if (!res.ok) {
            throw new Error(`Failed to fetch trips: ${res.status}`);
        }

        const data = (await res.json()) as TripsResponse;
        return data;
    } catch (e) {
        if (e instanceof Error) {
            console.error('fetchTrips error:', e.message);
            throw e;
        } else {
            console.error('fetchTrips unknown error:', e);
            throw new Error('Unknown error while fetching trips');
        }
    }
}
