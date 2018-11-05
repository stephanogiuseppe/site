import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AboutService {

    private readonly GIT_URL = `${ environment.GIT_API }/graphql`;
    private readonly URL = `${ environment.GENERIC_API }/skills`;

    // private Response<any>;

    constructor(private http: HttpClient) { }

    find(query: any): Observable<any> {
        return this.http.post<any>(this.GIT_URL, query);
    }

    findSkills(): Observable<any> {
        return this.http.get<any>(this.URL).pipe(delay(2000), tap(console.log));
    }
}
