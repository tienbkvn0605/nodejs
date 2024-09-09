import axios from "axios";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";
import { API_KEY, API_URL, ENV } from '../config';

export default class ApiBase {
    constructor() {
        this.baseUrl = "http://192.168.0.140:8000/products";
        this.baseUrl = API_URL;
        // http://192.168.0.140:8000/products
    }

    httpPost(uri, data, options) {
        return this.httpRequest(uri, "POST", data, options);
    }

    httpPut(uri, data, options) {
        return this.httpRequest(uri, "PUT", data, options);
    }

    httpGet(uri, data, options) {
        return this.httpRequest(uri, "GET", data, options);
    }

    httpDelete(uri, options) {
        return this.httpRequest(uri, "DELETE", undefined, options);
    }

    httpRequest(uri, method, data, options) {
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: this.baseUrl + uri,
                data: method !== "GET" ? data : omitBy(data, isNil),
                params: method === "GET" ? data || "" : "",
                withCredentials: true,
                ...options
            })
                .then((res) => {
                    resolve(res);
                })
                .catch((axiosError) => {
                    console.error(axiosError);
                    reject("SERVER_ERROR");
                });
        });
    }
}