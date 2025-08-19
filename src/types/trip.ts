export interface Trip {
    id: string;
    image?: string;
    fromCity: string;
    dateLabel: string;
    carManufacturer: string;
    carModel: string;
    cargoTypes: string[];
    cost: number;
}

export interface TripsResponse {
    items: Trip[];
    total: number;
}
