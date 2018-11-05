import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StatusService {

    private status$ = new Subject<string>();

    emmitStatus(status: string) {
        this.status$.next(status);
    }

    getStatus() {
        return this.status$.asObservable();
    }
}
