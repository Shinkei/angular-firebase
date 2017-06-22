import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(public firebaseAuth:AngularFireAuth, public flashMessagesService: FlashMessagesService) {
    this.user = firebaseAuth.authState;
   }

  ngOnInit() {
  }

  login() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.flashMessagesService.show('You are loged out!', {cssClass:'alert-success', timeout: 3000});
    this.firebaseAuth.auth.signOut();
  }
}
