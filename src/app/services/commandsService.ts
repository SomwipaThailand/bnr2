import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commands } from '../domain/commands';

@Injectable()
export class CommandsService {

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<any>('assets/data/command.json')
            .toPromise()
            .then(res => <Commands[]> res.data)
            .then(data => data);
    }
}
