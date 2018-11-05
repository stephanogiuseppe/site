import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CareerComponent } from './career/career.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutService } from './about.service';

@NgModule({
    imports: [
        CommonModule,
        // RouterModule,
        MatInputModule,
        MatGridListModule,
        AboutRoutingModule
    ],
    exports: [],
    declarations: [
        AboutComponent,
        CareerComponent,
        MeComponent,
        SkillsComponent
    ],
    providers: [
        AboutService
    ]
})
export class AboutModule { }
