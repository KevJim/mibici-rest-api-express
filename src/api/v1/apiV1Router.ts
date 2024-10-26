import express from 'express';
import { mibiciApiRouter } from 'src/api/v1/mibiciApi/utils/mibiciApiRouter';

export function apiV1Router(app: any): void {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/mibici', mibiciApiRouter());
}
