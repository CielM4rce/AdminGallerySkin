import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './container/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContainerComponent } from './container/container.component';
import { ListItemsComponent } from './container/list-items/list-items.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { Container2Component } from './container2/container2.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BtnWhatsappComponent } from './container2/btn-whatsapp/btn-whatsapp.component';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './container2/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ContainerComponent,
    ListItemsComponent,
    Container2Component,
    BtnWhatsappComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    NgxImageZoomModule,
    NgxPaginationModule,
    LazyLoadImageModule,
    provideFirebaseApp(() => initializeApp({"projectId":"galleryskin-2bf84","appId":"1:700593843371:web:8eaabf8d8f3e6d52b41bee","storageBucket":"galleryskin-2bf84.appspot.com","apiKey":"AIzaSyDRRiQhAVrOAexTYF7FS9ShCLyZsmJCnRc","authDomain":"galleryskin-2bf84.firebaseapp.com","messagingSenderId":"700593843371","measurementId":"G-XXQEKSTRJG"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
