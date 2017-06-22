import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCharacters().subscribe(characters => {
      console.log(characters);
      this.characters = characters;
    });
  }

}
