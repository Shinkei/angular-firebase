import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  id: any;
  character: any;
  imageUrl: any;

  constructor(private firebaseService: FirebaseService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];

    this.firebaseService.getCharacterDetails(this.id).subscribe(character =>{
      this.character = character;
    });
  }

}
