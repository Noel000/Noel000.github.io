import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebaseauth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: firebase.User;

  constructor(private fireauth: FirebaseAuthService) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
        console.log(this.user);
      }
    );
  }

}
