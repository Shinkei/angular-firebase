import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title: string;
  owner: string;
  type: string;
  city: string;
  bedrooms: number;
  price: number;
  image: any;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      titile: this.title,
      owner: this.owner,
      type: this.type,
      city: this.city,
      bedrooms: this.bedrooms,
      price: this.price,
    }

    this.firebaseService.addListing(listing);
    //this.router.navigate(['/listings']);
  }
}
