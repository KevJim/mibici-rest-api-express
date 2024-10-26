import { findNearStationsByLatitudeAndLongitudeAndDistance } from '../../../database/station/findNearStationsByLatitudeAndLongitudeAndDistance';

export async function findNearStations(params: Params): Promise<Array<StationViewModel>> {
    const stations = await findNearStationsByLatitudeAndLongitudeAndDistance(params);

    if (!stations.length) return [];

    return stations.map((station) => ({
        id: station.id,
        name: station.name,
        location: station.location,
        latitude: station.latitude,
        longitude: station.longitude,
        status: station.status,
    }));
}

type Params = {
    latitude: number;
    longitude: number;
    distance: number;
};

type StationViewModel = {
    id: string;
    name: string;
    location: string;
    latitude: number;
    longitude: number;
    status: string;
};
