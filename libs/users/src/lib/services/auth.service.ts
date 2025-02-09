import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.SetUserData(result.user);
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.router.navigate(['dashboard']);
          window.alert("Your login is successful");
        }
      });
    } catch (error:any) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  async SignUp(email: string, password: string) {
    try {
       const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
       /* Call the SendVerificaitonMail() function when new user sign
       up and returns promise */
       this.SetUserData(result.user);
       window.alert("Your register is successful");
       this.router.navigate(['dashboard']);
     } catch (error:any) {
       window.alert(error.message);
     }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  // Auth logic to run auth providers
  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.router.navigate(['dashboard']);
      this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  SetUserData(user: any) {
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }

  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }

}