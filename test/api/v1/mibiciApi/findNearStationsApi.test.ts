import app from '../../../../src/app';
import request from 'supertest';

describe('findNearStationsApi', () => {
    test('should return httpStatus=500 and error message if latitude is missing', async () => {
        const response = await request(app).get(
            '/api/v1/mibici/stations?longitude=-103.34882&distance=2',
        );

        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            error: 'Error finding near stations',
            message: 'Latitude is required',
        });
    });

    test('should return httpStatus=500 and error message if longitude is missing', async () => {
        const response = await request(app).get(
            '/api/v1/mibici/stations?latitude=20.666378&distance=2',
        );

        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            error: 'Error finding near stations',
            message: 'Longitude is required',
        });
    });

    test('should return httpStatus=500 and error message if distance is missing', async () => {
        const response = await request(app).get(
            '/api/v1/mibici/stations?latitude=20.666378&longitude=-103.34882',
        );

        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            error: 'Error finding near stations',
            message: 'Distance is required',
        });
    });

    test('should return httpStatus=200 and at least one station', async () => {
        const response = await request(app).get(
            '/api/v1/mibici/stations?latitude=20.666378&longitude=-103.34882&distance=2',
        );

        const stations = response.body.stations;

        expect(response.status).toBe(200);
        expect(stations.length).toBeGreaterThanOrEqual(1);
    });

    test('should return httpStatus=200 and empty array if are not stations', async () => {
        const response = await request(app).get(
            '/api/v1/mibici/stations?latitude=-90.666378&longitude=-103.34882&distance=5',
        );

        const stations = response.body.stations;

        expect(response.status).toBe(200);
        expect(stations.length).toBe(0);
    });
});
