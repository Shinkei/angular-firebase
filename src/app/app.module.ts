import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterComponent } from './components/character/character.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

import { FirebaseService } from './services/firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCiaoO7krCmrIg3lwmHcwkzF5GFlYeVvgc',
  authDomain: 'nagularcharacters.firebaseapp.com',
  databaseURL: 'https://nagularcharacters.firebaseio.com',
  projectId: 'nagularcharacters',
  storageBucket: 'nagularcharacters.appspot.com',
  messagingSenderId: '120843569706'
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'add-character', component: AddCharacterComponent},
  {path: 'character/:id', component: CharacterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    NavbarComponent,
    CharacterComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
