import { Station } from '../../../types/Station';
import csv from 'csv-parser';
import fs from 'fs';

export async function readStationsFromCSV(filePath: string): Promise<Array<Station>> {
    return new Promise((resolve, reject) => {
        const stations: Station[] = [];

        const stream = fs.createReadStream(filePath);

        stream.on('error', (error) => {
            reject(new Error(`Error reading file at ${filePath}: ${error.message}`));
        });

        stream
            .pipe(csv())
            .on('data', (row) => {
                stations.push({
                    id: row.id,
                    name: row.name,
                    obcn: row.obcn,
                    location: row.location,
                    latitude: parseFloat(row.latitude),
                    longitude: parseFloat(row.longitude),
                    status: row.status,
                });
            })
            .on('end', () => {
                resolve(stations);
            });
    });
}
