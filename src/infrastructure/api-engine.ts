import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import Eventbus from "../eventbus";
import {EventTypesConstants} from "../eventbus/event-types.constants";

const ApiEngine = axios.create({
    timeout: ( 60 * 1000 ),
    timeoutErrorMessage: 'Timeout error. Please verify service availability and network connection.',
    headers: {
        'Content-Type': 'application/json',
    }
});

ApiEngine.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    Eventbus.emit(EventTypesConstants.SHOW_LOADER);
    return config;
},handleRejectError);

ApiEngine.interceptors.response.use((response: AxiosResponse) => {
    Eventbus.emit(EventTypesConstants.HIDE_LOADER);
    return response;
},handleRejectError);

function handleRejectError(error: object): object {
    Eventbus.emit(EventTypesConstants.HIDE_LOADER);
    return Promise.reject(error);
}

export default ApiEngine;
