import { Component } from '@angular/core';
import { firebase } from '@firebase/app';
//import { firebase } from '@firebase/analytics';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    
    var firebaseConfig = {
      apiKey: "AIzaSyAtZmRdMS2iAn3XldLY3dVGjfTVZ74ssCg",
      authDomain: "biblio-5c7ec.firebaseapp.com",
      databaseURL: "https://biblio-5c7ec.firebaseio.com",
      projectId: "biblio-5c7ec",
      storageBucket: "biblio-5c7ec.appspot.com",
      messagingSenderId: "802440978348",
      appId: "1:802440978348:web:8431dfa302aaa1a1446409",
      measurementId: "G-XRHNHMTB26"
    };
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

  }
}