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

  loginWithFacebook() {
    let providerFacebook = new firebase.auth.FacebookAuthProvider();

    this.fire
    .auth
    .signInWithPopup(providerFacebook)
    .then(res => {
      console.log(res);
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

  loginWithGoogle() {
    let providerGoogle = new firebase.auth.GoogleAuthProvider();

    this.fire.auth.signInWithPopup(providerGoogle)
    .then( res => {
      this.provider.providerID = res.additionalUserInfo.providerId;
      this.provider.loggedIn = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.provider.profilePicture = res.user.photoURL;
    })
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
