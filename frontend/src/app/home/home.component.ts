import { Component, OnInit } from '@angular/core';
import { User } from '../User'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "SyncUp";

  user1:User = {
    id: 0,
    name: "Aakef"
  };

  constructor() { }

  ngOnInit() {
  }

}
