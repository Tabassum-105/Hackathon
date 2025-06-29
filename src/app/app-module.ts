import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Capitalized } from './directives/capitalized';
import { CapitalizeWordsPipe } from './pipes/capitalize-words-pipe';
import { AdminComponent } from './Components/admin-component/admin-component';
import { NotAuthorizedComponent } from './Components/not-authorized-component/not-authorized-component';
import { HomeComponent } from './Components/home-component/home-component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    App,
    Capitalized,
    CapitalizeWordsPipe,
    AdminComponent,
    NotAuthorizedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
