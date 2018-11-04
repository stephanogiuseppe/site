import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';

// import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    { path: 'invalid-url', component: ErrorPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled'/*,
            malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => {
                return urlSerializer.parse('/invalid-url');
            }*/
        }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
