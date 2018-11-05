import { Component, OnInit } from '@angular/core';

import { AboutService } from './../about.service';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss'],
    preserveWhitespaces: true
})
export class CareerComponent implements OnInit {

    totalCommits: any[];

    constructor(private aboutService: AboutService) { }

    ngOnInit() {
        const query = {
            // tslint:disable-next-line:max-line-length
            'query': 'query { repository(owner: "expressjs", name: "express") { stargazers {totalCount} pullRequests(states: OPEN) {totalCount}}}'
        };

        this.aboutService.find(query).subscribe((res) => {
            this.totalCommits = res;
            console.log(this.totalCommits);
        });
    }

}
