import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgZorroAntdModule} from "./ng-zorro-antd.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCreateComponent } from './task/pages/task-create/task-create.component';
import {AssociatedPeopleComponent} from "./task/component/associated-people-task/associated-people.component";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/app.reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {FormCreateTaskComponent} from "./task/component/form-create-task/form-create-task.component";
import {TaskTableComponent} from "./task/pages/task-table/task-table.component";
import {NzIconModule} from "ng-zorro-antd/icon";
import {EffectsModule} from "@ngrx/effects";
import {EffectsArray} from "./store/effects";
import {DetailTaskComponents} from "./task/component/detail-task/detail-task.component";

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AssociatedPeopleComponent,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    FormCreateTaskComponent,
    NzIconModule,
    DetailTaskComponents,
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
