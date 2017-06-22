import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  characters: FirebaseListObservable<any[]>;
  character: FirebaseObjectObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) { 
  }

  getCharacters(){
    this.characters = this.angularFire.list('/characters') as FirebaseListObservable<Character[]>;
    return this.characters;
  }

  getCharacterDetails(id){
    this.character = this.angularFire.object('/characters/' + id) as FirebaseObjectObservable<Character>;
    return this.character;
  }

  addCharacter(character){
    this.angularFire.list('/characters').push(character);
  }
}

interface Character{
  $key?: string;
  name?: string;
  race?: string;
  city?: string;
}