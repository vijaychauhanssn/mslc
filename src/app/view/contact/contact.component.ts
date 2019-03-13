import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
}
