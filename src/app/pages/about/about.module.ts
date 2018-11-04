import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';


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
        AboutComponent
    ],
    providers: [/* service */]
})
export class AboutModule { }
