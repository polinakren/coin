/* tslint:disable */
/* eslint-disable */
/**
 * Crypto API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ApiCoinsGet200Response,
  ApiCoinsIdPriceGet200Response,
  ApiCoinsIdTransferPost422Response,
  ApiCoinsIdTransferPostRequest,
} from '../models';
import {
    ApiCoinsGet200ResponseFromJSON,
    ApiCoinsGet200ResponseToJSON,
    ApiCoinsIdPriceGet200ResponseFromJSON,
    ApiCoinsIdPriceGet200ResponseToJSON,
    ApiCoinsIdTransferPost422ResponseFromJSON,
    ApiCoinsIdTransferPost422ResponseToJSON,
    ApiCoinsIdTransferPostRequestFromJSON,
    ApiCoinsIdTransferPostRequestToJSON,
} from '../models';

export interface ApiCoinsGetRequest {
    page?: number;
    limit?: number;
    title?: string;
}

export interface ApiCoinsIdPriceGetRequest {
    id: number;
}

export interface ApiCoinsIdTransferPostOperationRequest {
    id: number;
    apiCoinsIdTransferPostRequest: ApiCoinsIdTransferPostRequest;
}

/**
 * 
 */
export class CoinsApi extends runtime.BaseAPI {

    /**
     * Список монет
     */
    async apiCoinsGetRaw(requestParameters: ApiCoinsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCoinsGet200Response>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/coins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCoinsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Список монет
     */
    async apiCoinsGet(requestParameters: ApiCoinsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCoinsGet200Response> {
        const response = await this.apiCoinsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Стоимость монеты в центах
     */
    async apiCoinsIdPriceGetRaw(requestParameters: ApiCoinsIdPriceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCoinsIdPriceGet200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCoinsIdPriceGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/coins/{id}/price`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCoinsIdPriceGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Стоимость монеты в центах
     */
    async apiCoinsIdPriceGet(requestParameters: ApiCoinsIdPriceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCoinsIdPriceGet200Response> {
        const response = await this.apiCoinsIdPriceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Трансфер монеты
     */
    async apiCoinsIdTransferPostRaw(requestParameters: ApiCoinsIdTransferPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiCoinsIdTransferPost.');
        }

        if (requestParameters.apiCoinsIdTransferPostRequest === null || requestParameters.apiCoinsIdTransferPostRequest === undefined) {
            throw new runtime.RequiredError('apiCoinsIdTransferPostRequest','Required parameter requestParameters.apiCoinsIdTransferPostRequest was null or undefined when calling apiCoinsIdTransferPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/coins/{id}/transfer`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiCoinsIdTransferPostRequestToJSON(requestParameters.apiCoinsIdTransferPostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Трансфер монеты
     */
    async apiCoinsIdTransferPost(requestParameters: ApiCoinsIdTransferPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiCoinsIdTransferPostRaw(requestParameters, initOverrides);
    }

}
