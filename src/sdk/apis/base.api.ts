import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, throwError, Subscriber, from } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { SdkConfig } from '../sdk.config';
import { AnyObject } from '@/globals';
import { ApiResponseModel } from '../models';

export abstract class BaseApi {
    protected ApiUrl = SdkConfig.ApiPath;

    private request(
        method: AxiosRequestConfig['method'],
        url: string,
        postBody: AnyObject = {}
    ): Observable<AxiosResponse> {
        const headers: AxiosRequestConfig['headers'] = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: this.authorize()
        };
        const options: AxiosRequestConfig = {
            method,
            url,
            headers,
            data: postBody
        };
        return Observable.create((observer: Subscriber<any>) => {
            axios(options)
                .then(res => {
                    observer.next(res);
                    observer.complete();
                })
                .catch(err => {
                    observer.error(err);
                    observer.complete();
                });
        }).pipe(
            map(res => res),
            catchError(e => this.handleError(e))
        );
    }

    protected fileRequest(
        method: AxiosRequestConfig['method'],
        url: string,
        data: AnyObject = {}
    ): Observable<AxiosResponse> {
        // Headers to be sent
        const headers: AxiosRequestConfig['headers'] = {
            'Content-Type': 'multipart/form-data'
        };
        const options: AxiosRequestConfig = {
            method,
            url,
            headers,
            data
        };
        return from(axios(options)).pipe(
            delay(0),
            map(Res => Res),
            catchError(e => this.handleError(e))
        );
    }

    protected downloadRequest(Url: string): Observable<AxiosResponse> {
        const Options: AxiosRequestConfig = {
            method: 'GET',
            url: Url,
            responseType: 'blob'
        };
        return from(axios(Options)).pipe(
            delay(0),
            map(Res => Res),
            catchError(e => this.handleError(e))
        );
    }

    private authorize() {
        //
    }

    private handleError(error: AxiosError) {
        return throwError(
            error.response?.data.error || 'Internal Server Error'
        );
    }

    // Requests
    protected GET_Request<T>(url: string): Observable<ApiResponseModel<T>> {
        return this.request('GET', url).pipe(map(res => res.data));
    }
    protected POST_Request<T>(
        url: string,
        postBody: AnyObject
    ): Observable<ApiResponseModel<T>> {
        return this.request('POST', url, postBody).pipe(map(res => res.data));
    }
    protected PATCH_Request<T>(
        url: string,
        postBody: AnyObject
    ): Observable<ApiResponseModel<T>> {
        return this.request('PATCH', url, postBody).pipe(map(res => res.data));
    }
    protected PUT_Request<T>(
        url: string,
        postBody: AnyObject
    ): Observable<ApiResponseModel<T>> {
        return this.request('PUT', url, postBody).pipe(map(res => res.data));
    }
    protected DELETE_Request<T>(url: string): Observable<ApiResponseModel<T>> {
        return this.request('DELETE', url).pipe(map(res => res.data));
    }
    protected POST_FileRequest<T>(
        url: string,
        postBody: AnyObject
    ): Observable<ApiResponseModel<T>> {
        return this.fileRequest('POST', url, postBody).pipe(
            map(res => res.data)
        );
    }
}
