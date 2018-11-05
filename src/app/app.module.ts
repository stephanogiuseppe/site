import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
// import { AboutModule } from './pages/about/about.module'; // lazy load
import { StatusService } from './shared/services/status.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    // AboutModule
  ],
  providers: [
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink
    ) {
        apollo.create({
            link: httpLink.create({ uri: 'https://api.github.com/graphql' }),
            cache: new InMemoryCache()
        });
    }
}
