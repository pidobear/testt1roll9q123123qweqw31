import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
    RouterModule.forRoot([{ path: 'MainPage', component: LandingComponent }]),
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    TopBarComponent,
    ProductListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
