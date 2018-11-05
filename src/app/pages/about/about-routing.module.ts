import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills/skills.component';
import { MeComponent } from './me/me.component';
import { CareerComponent } from './career/career.component';

const aboutRoutes: Routes = [
    { path: '', component: AboutComponent, children: [
        { path: 'me', component: MeComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'career', component: CareerComponent }
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AboutRoutingModule { }
