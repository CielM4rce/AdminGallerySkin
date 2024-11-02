import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideRouter(routes), provideAnimations(),
    importProvidersFrom(
      ReactiveFormsModule,
    ),
    provideFirebaseApp(() => initializeApp({"projectId":"galleryskin-2bf84","appId":"1:700593843371:web:8eaabf8d8f3e6d52b41bee","storageBucket":"galleryskin-2bf84.appspot.com","apiKey":"AIzaSyDRRiQhAVrOAexTYF7FS9ShCLyZsmJCnRc","authDomain":"galleryskin-2bf84.firebaseapp.com","messagingSenderId":"700593843371","measurementId":"G-XXQEKSTRJG"})),
    provideFirestore(() => getFirestore())
  ]
};
