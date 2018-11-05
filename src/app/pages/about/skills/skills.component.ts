import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { AboutService } from './../about.service';
import { Skill } from './skills.model';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {

    skills$: Observable<Skill[]>;

    constructor(private aboutService: AboutService) { }

    ngOnInit() {
        this.skills$ = this.aboutService.findSkills();
    }

    ngOnDestroy() {
        console.log('destroyed');
    }
}
