import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commands } from '../domain/commands';

@Injectable()
export class ReportdialyService {

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<any>('assets/data/report-dialy.json')
            .toPromise()
            .then(res => <Commands[]> res.data)
            .then(data => data);
    }
}
