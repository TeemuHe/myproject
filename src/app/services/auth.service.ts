import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  // jaska.jokunen@gmail.com  -  salasana
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  checkLoggedIn(): Observable<string> {
    return this.userEmail;
  }
}
