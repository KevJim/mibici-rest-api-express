import { findNearStationsApi } from '../findNearStationsApi';
import express from 'express';

export function mibiciApiRouter() {
    const router = express.Router();

    router.get('/stations', findNearStationsApi);

    return router;
}
