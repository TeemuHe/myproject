import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  // userData: Observable<firebase.User>;
  // jaska.jokunen@gmail.com  -  salasana
  userEmail: string;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  login(email, password) {
    console.log('Kirjaudutaan' + email + password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });



    /*return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        this.userEmail.next(user.email);

      })
      .catch((error) => {
        console.log(error.message);
      });*/
    /*this.angularFireAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('kirjaumine toimii');
    });

    console.log(email);
    console.log(password);*/
  }

  getLoggedInUser(): any {
    console.log(Boolean(this.afAuth.authState));
    return this.afAuth.authState;
  }


  logout() {
    return this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/feedback']);
      });
  }

  checkLoggedInUser() {

  }
}
