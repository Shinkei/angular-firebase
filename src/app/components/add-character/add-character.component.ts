import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  name: string;
  race: string;
  city: string;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let character = {
      name: this.name,
      race: this.race,
      city: this.city
    }

    this.firebaseService.addCharacter(character);
    this.router.navigate(['/characters']);
  }
}
