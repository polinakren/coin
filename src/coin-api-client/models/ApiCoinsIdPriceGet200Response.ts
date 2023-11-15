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

import { exists, mapValues } from '../runtime';
import type { ApiCoinsIdPriceGet200ResponseData } from './ApiCoinsIdPriceGet200ResponseData';
import {
    ApiCoinsIdPriceGet200ResponseDataFromJSON,
    ApiCoinsIdPriceGet200ResponseDataFromJSONTyped,
    ApiCoinsIdPriceGet200ResponseDataToJSON,
} from './ApiCoinsIdPriceGet200ResponseData';

/**
 * 
 * @export
 * @interface ApiCoinsIdPriceGet200Response
 */
export interface ApiCoinsIdPriceGet200Response {
    /**
     * 
     * @type {ApiCoinsIdPriceGet200ResponseData}
     * @memberof ApiCoinsIdPriceGet200Response
     */
    data: ApiCoinsIdPriceGet200ResponseData;
}

/**
 * Check if a given object implements the ApiCoinsIdPriceGet200Response interface.
 */
export function instanceOfApiCoinsIdPriceGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ApiCoinsIdPriceGet200ResponseFromJSON(json: any): ApiCoinsIdPriceGet200Response {
    return ApiCoinsIdPriceGet200ResponseFromJSONTyped(json, false);
}

export function ApiCoinsIdPriceGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCoinsIdPriceGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ApiCoinsIdPriceGet200ResponseDataFromJSON(json['data']),
    };
}

export function ApiCoinsIdPriceGet200ResponseToJSON(value?: ApiCoinsIdPriceGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ApiCoinsIdPriceGet200ResponseDataToJSON(value.data),
    };
}
