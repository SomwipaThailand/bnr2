import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from '../domain/alert';

@Injectable()
export class AlertService {

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<any>('assets/data/alert.json')
            .toPromise()
            .then(res => <Alert[]> res.data)
            .then(data => data);
    }
}
