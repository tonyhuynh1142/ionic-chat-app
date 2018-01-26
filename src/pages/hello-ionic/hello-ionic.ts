import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  provider = {
    providerID : '',
    name: '',
    profilePicture: '',
    email: '',
    loggedIn : false
  }

  constructor( private fire: AngularFireAuth) {}

  login(provider) {
    let singInProvider = null;

    switch (provider) {
      case "facebook" :
        singInProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "google" :
        singInProvider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    this.fire
    .auth
    .signInWithPopup(singInProvider)
    .then(res => {
      this.provider.providerID = res.additionalUserInfo.providerId;
      this.provider.loggedIn = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }

  logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      console.log(error);
    });
    this.provider.loggedIn = false;
  }

}
