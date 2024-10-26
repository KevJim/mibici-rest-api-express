import { Station } from '../../types/Station';
import { convertKilometersToMeters } from '../../utils/distance/convertKilometersToMeters';
import { readStationsFromCSV } from './utils/readStationsFromCSV';
import { isPointWithinRadius } from 'geolib';
import path from 'path';

/*
Here should be the logic to find in database but for learning purposes
I'm just gonna to simulate the function reading directly from csv file.
*/
export async function findNearStationsByLatitudeAndLongitudeAndDistance({
    latitude,
    longitude,
    distance,
}: Params): Promise<Array<Station>> {
    const csvFilePath = path.join(__dirname, 'stations.csv');
    const stations = await readStationsFromCSV(csvFilePath);

    return stations.filter((station) =>
        isPointWithinRadius(
            { latitude, longitude },
            { latitude: station.latitude, longitude: station.longitude },
            convertKilometersToMeters(distance),
        ),
    );
}

type Params = {
    latitude: number;
    longitude: number;
    distance: number;
};
