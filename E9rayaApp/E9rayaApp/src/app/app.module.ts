import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI7QE7rXxNvuXabQqVbM2yow3hx_t_LdQ",
  authDomain: "e9raya-e77b8.firebaseapp.com",
  projectId: "e9raya-e77b8",
  storageBucket: "e9raya-e77b8.appspot.com",
  messagingSenderId: "147468272480",
  appId: "1:147468272480:web:8d0bf403527f9f44071405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent,AccountComponent,ContactComponent, CoursesComponent, MenuComponent, SettingsComponent, HomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
