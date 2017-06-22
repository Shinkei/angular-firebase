import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  folder: any;

  constructor(private angularFire: AngularFireDatabase) { 
    this.folder = 'listingImages';
  }

  getListings(){
    this.listings = this.angularFire.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.angularFire.object('/listings/' + id) as FirebaseObjectObservable<Listing>;
    return this.listing;
  }

  addListing(listing){
    debugger;
    let storageRef = firebase.storage().ref();

    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }

  }
}

interface Listing{
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;

}