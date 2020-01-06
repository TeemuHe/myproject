import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // jaska.jokunen@gmail.com  -  salasana
  public userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user != null) {
        this.userEmail.next(user.email);
        console.log(user.email + 'eemaili');
        return user.email;
      }
    });

    /*this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });*/
  }

  login(email, password) {
    console.log('Kirjaudutaan' + email + password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.checkLoggedIn(email);
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  getLoggedInUser(): any {
    // console.log(Boolean(this.afAuth.authState));
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/feedback']);
      });
  }

  checkLoggedIn(email) {
    return email;
  }

  /*checkLoggedInUser(): Observable<any> {
    return this.userEmail;
  }*/
}
