import { ConsentComponent } from './containers/consent/consent.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

const rootRouterConfig: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'consent', component: ConsentComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
