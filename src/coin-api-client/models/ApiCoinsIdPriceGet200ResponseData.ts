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
/**
 * 
 * @export
 * @interface ApiCoinsIdPriceGet200ResponseData
 */
export interface ApiCoinsIdPriceGet200ResponseData {
    /**
     * Актуальная стоимость монеты
     * @type {number}
     * @memberof ApiCoinsIdPriceGet200ResponseData
     */
    price: number;
}

/**
 * Check if a given object implements the ApiCoinsIdPriceGet200ResponseData interface.
 */
export function instanceOfApiCoinsIdPriceGet200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "price" in value;

    return isInstance;
}

export function ApiCoinsIdPriceGet200ResponseDataFromJSON(json: any): ApiCoinsIdPriceGet200ResponseData {
    return ApiCoinsIdPriceGet200ResponseDataFromJSONTyped(json, false);
}

export function ApiCoinsIdPriceGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCoinsIdPriceGet200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': json['price'],
    };
}

export function ApiCoinsIdPriceGet200ResponseDataToJSON(value?: ApiCoinsIdPriceGet200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
    };
}

