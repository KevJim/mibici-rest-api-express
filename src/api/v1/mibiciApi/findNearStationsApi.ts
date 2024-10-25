import { findNearStations } from '../../../modules/stations/functions/findNearStations';

export async function findNearStationsApi(req: any, res: any): Promise<void> {
    try {
        if (!req.query.latitude) throw new Error('Latitude is required');
        if (!req.query.longitude) throw new Error('Longitude is required');
        if (!req.query.distance) throw new Error('Distance is required');

        const stations = await findNearStations({
            latitude: req.query.latitude,
            longitude: req.query.longitude,
            distance: req.query.distance,
        });

        return res.status(200).json({
            stations,
        });
    } catch (error: any) {
        console.error('Error findNearStationsApi:', error);
        return res
            .status(500)
            .json({ error: 'Error finding near stations', message: error.message });
    }
}
