import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './container/formulario/formulario.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContainerComponent } from './container/container.component';
import { ListItemsComponent } from './container/list-items/list-items.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ContainerComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
