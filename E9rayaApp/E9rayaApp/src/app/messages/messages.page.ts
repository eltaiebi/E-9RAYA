import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  add(){
    console.log("test")
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }
}
