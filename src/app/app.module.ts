import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AsyncPipe } from '@angular/common';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsyncPipe
  ],
  providers: [
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
