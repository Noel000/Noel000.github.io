import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebaseauth.service';
import firebase from 'firebase/app';
import { FirebasedbService } from 'src/app/services/firebasedb.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: boolean = false;
  public allowedUserError: boolean = false;

  constructor(private fireauth: FirebaseAuthService, private firestore: FirebasedbService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        let email = user.user.email;
        console.log(email);
        this.firestore.comprovarUser(email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if (originalEmails.length == 1) {
              this.loginError = false;
              this.allowedUserError = false;
              this.router.navigate(['/home']);
            }else {
              this.loginError = true;
              this.allowedUserError = true;
              this.fireauth.logout();
            }
          }
        )
      }
    ).catch(
      (error: any) =>{

      }
    )
  }

}


