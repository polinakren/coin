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
 * @interface ApiCoinsGet200ResponseMeta
 */
export interface ApiCoinsGet200ResponseMeta {
    /**
     * Текущая страница
     * @type {number}
     * @memberof ApiCoinsGet200ResponseMeta
     */
    page: number;
    /**
     * Размер страницы
     * @type {number}
     * @memberof ApiCoinsGet200ResponseMeta
     */
    limit: number;
    /**
     * Общее кол-во монет
     * @type {number}
     * @memberof ApiCoinsGet200ResponseMeta
     */
    total: number;
    /**
     * Общее кол-во страниц
     * @type {number}
     * @memberof ApiCoinsGet200ResponseMeta
     */
    pageCount: number;
}

/**
 * Check if a given object implements the ApiCoinsGet200ResponseMeta interface.
 */
export function instanceOfApiCoinsGet200ResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "pageCount" in value;

    return isInstance;
}

export function ApiCoinsGet200ResponseMetaFromJSON(json: any): ApiCoinsGet200ResponseMeta {
    return ApiCoinsGet200ResponseMetaFromJSONTyped(json, false);
}

export function ApiCoinsGet200ResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiCoinsGet200ResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': json['page'],
        'limit': json['limit'],
        'total': json['total'],
        'pageCount': json['page_count'],
    };
}

export function ApiCoinsGet200ResponseMetaToJSON(value?: ApiCoinsGet200ResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'limit': value.limit,
        'total': value.total,
        'page_count': value.pageCount,
    };
}
