import { CoinsApi, Configuration } from 'coin-api-client';

const configuration = new Configuration({ basePath: '/api' });

export const coinsApi = new CoinsApi(configuration);
