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
 * @interface ApiCoinsIdTransferPost422Response
 */
export interface ApiCoinsIdTransferPost422Response {
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiCoinsIdTransferPost422Response
     */
    errors: Array<string>;
}

/**
 * Check if a given object implements the ApiCoinsIdTransferPost422Response interface.
 */
export function instanceOfApiCoinsIdTransferPost422Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function ApiCoinsIdTransferPost422ResponseFromJSON(json: any): ApiCoinsIdTransferPost422Response {
    return ApiCoinsIdTransferPost422ResponseFromJSONTyped(json, false);
}

export function ApiCoinsIdTransferPost422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCoinsIdTransferPost422Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': json['errors'],
    };
}

export function ApiCoinsIdTransferPost422ResponseToJSON(value?: ApiCoinsIdTransferPost422Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
    };
}
