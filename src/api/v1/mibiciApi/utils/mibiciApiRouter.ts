import express from 'express';
import { findNearStationsApi } from 'src/api/v1/mibiciApi/findNearStationsApi';

export function mibiciApiRouter() {
    const router = express.Router();

    router.get('/stations', findNearStationsApi);

    return router;
}
